import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import { Switch } from '@stripe/ui-extension-sdk/ui';

const OrderShow = ({ order, currentUser }) => {
	const [timeLeft, setTimeLeft] = useState(0);
	const { doRequest, errors } = useRequest({
		url: '/api/payments',
		method: 'post',
		body: {
			orderId: order.id,
		},
		onSuccess: (payment) => Router.push('/orders'),
	});

	useEffect(() => {
		const findTimeLeft = () => {
			const msLeft = new Date(order.expiresAt) - new Date();
			setTimeLeft(Math.round(msLeft / 1000));
		};

		findTimeLeft();
		const timerId = setInterval(findTimeLeft, 1000);

		return () => {
			clearInterval(timerId);
		};
	}, [order]);

	if (timeLeft < 0) {
		return <div>Order Expired</div>;
	}

	return (
		<div>
			<span class='placeholder col-12 bg-primary'></span>
			<span class='placeholder col-12 bg-secondary'></span>
			<div class='mb-3'>Time left to pay: {timeLeft} seconds</div>
			<div class='mb-3'>
				<StripeCheckout
					token={({ id }) => doRequest({ token: id })}
					stripeKey='pk_test_51MD6j5KLFEejBUW6fijiD6cgo8OkwU2fDcXt8d74pEuLFoyhPNlyq88sGzrvigBYxWbnnLDPvu
49V2nhWQi8lZSk00rAM4Mw07'
					amount={order.ticket.price * 100}
					email={currentUser.email}
				/>
				{errors}
				<Switch
					label='This is a Switch.'
					onChange={(e) => {
						console.log(e.target.checked);
					}}
				/>
			</div>
		</div>
	);
};

OrderShow.getInitialProps = async (context, client) => {
	const { orderId } = context.query;
	const { data } = await client.get(`/api/orders/${orderId}`);

	return { order: data };
};

export default OrderShow;
