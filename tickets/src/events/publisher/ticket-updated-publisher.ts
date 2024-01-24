import { Publisher, Subjects, TicketUpdatedEvent } from '@hakan.basturk/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
