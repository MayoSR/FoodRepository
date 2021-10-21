import { Component, OnInit } from '@angular/core';
import { FoodItemsService } from '../food-items.service';

@Component({
  selector: 'app-popular-foods',
  templateUrl: './popular-foods.component.html',
  styleUrls: ['./popular-foods.component.css']
})
export class PopularFoodsComponent implements OnInit {

  constructor(public foodItemArray: FoodItemsService) { }

  toggle = true

  allowEdit() {
    var inputs = document.body.querySelectorAll(".form-control")
    for (var i = 0; i < inputs.length; i++) {
      if (this.toggle) {
        (<HTMLInputElement>inputs[i]).classList.remove("editable")
      }
      else {
        (<HTMLInputElement>inputs[i]).classList.add("editable");
        (<HTMLInputElement>inputs[i]).focus();
        (<HTMLInputElement>inputs[i]).selectionStart
      }
    }
    this.toggle = !this.toggle
  }

  ngOnInit() {
  }

}
