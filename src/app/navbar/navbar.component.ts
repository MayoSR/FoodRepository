import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemsService } from '../menu-items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public status = "menu"

  constructor(public router: Router, public menuItemArray: MenuItemsService) { }

  itemTot() {
    var sum: number = 0;
    for (var i = 0; i < this.menuItemArray.menuArray.length; i++) {
      sum += this.menuItemArray.menuArray[i].countOfItems
    }
    return sum
  }

  redirect(path: string, status: string) {
    this.router.navigate(["./" + path])
    this.status = status
  }

  ngOnInit() {
  }

}
