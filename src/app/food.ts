export class Food {
    public name:string;
    public price:number;
    public type:string;
    public rating:number;
    public foodIndex:number;
    public side:boolean;
    public imgPath:string = "assets/images/";
    static foodId = 0;
    constructor(name,price,type,rating,path="#",side=false){
        this.name = name
        this.price = price
        this.type = type
        this.rating = rating
        this.foodIndex = Food.foodId++
        this.side = side
        this.imgPath+=path
    }
}
