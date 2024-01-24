import { Publisher, OrderCreatedEvent, Subjects } from '@hakan.basturk/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
