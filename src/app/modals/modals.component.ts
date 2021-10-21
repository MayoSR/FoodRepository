import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class ModalsComponent implements OnInit {

  constructor(public modalToggle: ModalService) { }

  @ViewChild('maxAmt', { static: false }) maxAmt;
  @ViewChild('selFoodType', { static: false }) selFoodType;

  setFilters() {
    this.modalToggle.priceRange = this.maxAmt.nativeElement.value == "" ? 9000 : this.maxAmt.nativeElement.value
    this.modalToggle.foodType = this.selFoodType.nativeElement.options[this.selFoodType.nativeElement.selectedIndex].text;
    this.modalToggle.toggleModal()
  }

  ngOnInit() {
  }

}
