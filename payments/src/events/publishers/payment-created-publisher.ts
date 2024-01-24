import { Subjects, Publisher, PaymentCreatedEvent } from '@hakan.basturk/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}
