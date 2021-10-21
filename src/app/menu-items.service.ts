import { Injectable } from '@angular/core';
import { MenuItems } from './menu-items';
import { FoodItemsService } from './food-items.service';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  menuArray: MenuItems[] = [];

  constructor(public foodItemArray: FoodItemsService) {
    for (var i = 0; i < this.foodItemArray.foodArray.length; i++) {
      this.menuArray.push(new MenuItems(this.foodItemArray.foodArray[i]))
    }
  }

  incMenuItem(menuItem: MenuItems) {
    menuItem.incCountOfItems()
  }

  decMenuItem(menuItem: MenuItems) {
    menuItem.decCountOfItems()
  }

  resetMenu() {
    for (var i = 0; i < this.menuArray.length; i++) {
      this.menuArray[i].resetItems()
    }
  }

  billTot() {
    var sum: number = 0;
    for (var i = 0; i < this.menuArray.length; i++) {
      sum += this.menuArray[i].countOfItems * this.menuArray[i].foodItem.price
    }
    return "&#xf156;&nbsp;" + sum
  }

  itemTot() {
    var sum: number = 0;
    for (var i = 0; i < this.menuArray.length; i++) {
      sum += this.menuArray[i].countOfItems
    }
    return sum
  }

  returnCountOfItem(foodIndex) {
    return this.menuArray[foodIndex].countOfItems
  }




}
