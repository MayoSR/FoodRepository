import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalStatus:boolean = false
  priceRange:number = 1000
  foodType:string = "Any"
  
  constructor() { }

  toggleModal(){
    this.modalStatus = !this.modalStatus
  }

  setPriceRange(price){
    this.priceRange  = price
  }

  setFoodType(type){
    this.foodType = type
  }

  
}
