import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const TicketShow = ({ ticket }) => {
	const { doRequest, errors } = useRequest({
		url: '/api/orders',
		method: 'post',
		body: {
			ticketId: ticket.id,
		},
		onSuccess: (order) =>
			Router.push('/orders/[orderId]', `/orders/${order.id}`),
	});

	// <div>
	{
		/* <h1>{ticket.title}</h1> */
	}
	{
		/* <h4>Price: {ticket.price}</h4> */
	}
	{
		/* {errors} */
	}
	{
		/* <button onClick={() => doRequest()} className='btn btn-primary'> */
	}
	{
		/* Purchase */
	}
	{
		/* </button> */
	}
	{
		/* </div>; */
	}

	return (
		<div>
			<span class='placeholder col-12 bg-primary'></span>
			<span class='placeholder col-12 bg-secondary'></span>

			<div class='mb-3'>
				<label for='exampleFormControlInput1' class='form-label'>
					Ticket
				</label>
				<input
					readOnly='true'
					type='text'
					class='form-control'
					id='exampleFormControlInput1'
					value={ticket.title}
				/>
			</div>
			<div class='mb-3'>
				<label for='exampleFormControlTextarea1' class='form-label'>
					Price
				</label>
				<input
					readOnly='true'
					class='form-control'
					id='exampleFormControlInput2'
					value={ticket.price}
				/>
			</div>
			<button onClick={() => doRequest()} className='btn btn-primary'>
				Purchase
			</button>
		</div>
	);
};

TicketShow.getInitialProps = async (context, client) => {
	const { ticketId } = context.query;
	const { data } = await client.get(`/api/tickets/${ticketId}`);

	return { ticket: data };
};

export default TicketShow;
