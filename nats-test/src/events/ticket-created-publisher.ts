import { Publisher, TicketCreatedEvent, Subjects } from "@hakan.basturk/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;


}