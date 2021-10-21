import { Component, OnInit } from '@angular/core';
import { OrdersItemsService } from '../orders-items.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class OrdersComponent implements OnInit {

  constructor(public orderItemArray: OrdersItemsService) { }

  returnOrders() {
    return this.orderItemArray.orderedItems
  }

  ngOnInit() {
  }

}
