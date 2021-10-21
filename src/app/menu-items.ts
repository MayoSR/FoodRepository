import { Food } from './food'

export class MenuItems {
    public countOfItems:number;
    public foodItem:Food;
    public isAdded:boolean;


    constructor(foodItem:Food,countOfItems:number = 0,isAdded:boolean = false){
        this.foodItem = foodItem;
        this.countOfItems = countOfItems
        this.isAdded = isAdded
    }

    incCountOfItems(){
        this.countOfItems++
        this.isAdded = true
    }

    decCountOfItems(){
        this.countOfItems--
        if(!this.countOfItems){
            this.isAdded = false
        }
    }

    returnCountOfItem(foodIndex){
        return this.countOfItems
    }

    resetItems(){
        this.countOfItems = 0
        this.isAdded = false
    }


}
