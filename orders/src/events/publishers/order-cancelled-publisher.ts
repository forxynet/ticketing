import { Subjects, Publisher, OrderCancelledEvent } from '@hakan.basturk/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
