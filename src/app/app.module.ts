import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { PopularFoodsComponent } from './popular-foods/popular-foods.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemsService } from './menu-items.service';
import { FoodItemsService } from './food-items.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersItemsService } from './orders-items.service';
import { FormsModule } from '@angular/forms';
import { ModalsComponent } from './modals/modals.component';
import { ModalService } from './modal.service';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  {path: '', component: MenuCardComponent,pathMatch: 'full'},
  {path: 'checkout', component: CheckoutComponent,pathMatch: 'full'},
  {path: 'orders', component: OrdersComponent,pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuCardComponent,
    NavbarTopComponent,
    PopularFoodsComponent,
    CheckoutComponent,
    OrdersComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MenuItemsService,FoodItemsService,OrdersItemsService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
