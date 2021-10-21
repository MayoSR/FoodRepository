import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {
  foodData = ["Pasta Arrabiata","Chicken Burger","Veggie Pizza","Chicken Steak Sizzler","Caesar Salad","Bacon and Eggs","Risotto","Chicken Lasagna","Fish n' Chips"];
  priceData = [100,200,300,400,500,600,700,800,900];
  typeData =["Vegetarian","Non Vegetarian","Vegetarian","Non Vegetarian","Vegetarian","Non Vegetarian","Vegetarian","Non Vegetarian","Non Vegetarian"];
  ratingData =[1.2,2.2,3.3,4.4,5.0,3.4,2.6,1.5,4.3];
  pathData = ["arrabiata.jpg","chickenburger.jpg","veggiepizza.jpg","chickensizzler.jpg","caesarsalad.jpg","baconandeggs.jpg","risotto.jpg","chickenlasagna.jpg","fishnchips.jpg"]
  foodArray:Food[] = []
  constructor() { 
    for(var i=0;i<this.foodData.length;i++){
      this.foodArray.push(new Food(this.foodData[i],this.priceData[i],this.typeData[i],this.ratingData[i],this.pathData[i]));
    }

    this.foodArray.sort((one, two) => (one.name < two.name ? -1 : 1));
  }

  returnFoodItem(foodIndex){
    for(var i=0;i<this.foodArray.length;i++){
      if(this.foodArray[i].foodIndex == foodIndex){
        return this.foodArray[i]
      }
    }
  }
}
