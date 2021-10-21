import { Injectable } from '@angular/core';
import { MenuItemsService } from './menu-items.service';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersItemsService {
  orderedItems: Orders[] = []

  constructor(public menuItemsArray: MenuItemsService) {

  }

  createOrder(menuItem) {
    this.orderedItems.push(new Orders(this.menuItemsArray.menuArray))
    this.menuItemsArray.resetMenu()
  }

  countOfOrders() {
    return this.orderedItems.length
  }


}
