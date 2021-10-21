import { MenuItems } from './menu-items'


export class Orders {

    public order:MenuItems[] = []
    public orderNo:number = 0
    public isComplete:boolean = false
    public totOrderAmt:number = 0
    public orderCode:string = "AAAAAA";
    public orderStatus:string = "Waiting"
    public rating:number = 0

    constructor(menuArray){
        for(var i=0;i<menuArray.length;i++){
            this.order.push(new MenuItems(menuArray[i].foodItem,menuArray[i].countOfItems,menuArray[i].isAdded))
            this.totOrderAmt+= (menuArray[i].countOfItems * menuArray[i].foodItem.price)
        }
        
    }
}
