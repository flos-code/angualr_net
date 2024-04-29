import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss',
})
export class AddOrderComponent {
  @Output() closeOrder = new EventEmitter<void>();

  stopClickPropagation(event: Event): void {
    event.stopPropagation();
  }

  closeAddOrder() {
    this.closeOrder.emit();
  }
}
