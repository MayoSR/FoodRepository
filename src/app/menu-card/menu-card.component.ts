import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuItemsService } from '../menu-items.service';
import { FoodItemsService } from '../food-items.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class MenuCardComponent implements OnInit {

  searchText: string = ""

  constructor(public menuItemArray: MenuItemsService, public foodItemArray: FoodItemsService, public modalToggle: ModalService) {
  }


  addToCartFlag(foodId) {
    this.menuItemArray.menuArray[foodId].isAdded = true
    this.menuItemArray.menuArray[foodId].countOfItems++
  }

  incCount(foodId) {
    this.menuItemArray.menuArray[foodId].countOfItems++
  }

  decCount(foodId) {
    this.menuItemArray.menuArray[foodId].countOfItems--
    if (!this.menuItemArray.menuArray[foodId].countOfItems) {
      this.menuItemArray.menuArray[foodId].isAdded = false
    }
  }

  search() {
    return this.searchText.charAt(0).toUpperCase() + this.searchText.slice(1)
  }

  filterFoods(foodItem) {
    if (foodItem.name.includes(this.search()) && foodItem.price <= this.modalToggle.priceRange) {
      if (this.modalToggle.foodType == "Any") {
        return true
      }
      else if (this.modalToggle.foodType == foodItem.type) {
        return true
      }
    }

  }



  ngOnInit() {
  }

}
