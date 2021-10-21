import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../menu-items.service';
import { OrdersItemsService } from '../orders-items.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpCommunicationService } from '../http-communication.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class CheckoutComponent implements OnInit {

  constructor(public menuItemArray: MenuItemsService, public orderItemArray: OrdersItemsService, public httpService: HttpCommunicationService) { }

  serverData = null

  createOrder(menuArr) {
    this.orderItemArray.createOrder(menuArr)
  }

  placeOrder() {
    var names = document.querySelectorAll(".item-name")
    var price = document.querySelectorAll(".span-item-price")
    var qty = document.querySelectorAll(".qty-input")
    var jsonArr = {}
    for (var i = 0; i < names.length; i++) {
      jsonArr[names[i].textContent] = { "price": price[i].textContent, "qty": parseInt((<HTMLInputElement>qty[i]).value) }
    }
    this.httpService.sendOrder(jsonArr)
  }

  ngOnInit() {

  }

}
