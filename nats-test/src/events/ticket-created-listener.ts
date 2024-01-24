import { Message } from "node-nats-streaming";
import { Listener, TicketCreatedEvent, Subjects } from "@hakan.basturk/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
    queueGroupName = 'payment-service';

    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
        console.log('Event data!', data);
        msg.ack();
    }
}