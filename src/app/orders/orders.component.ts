import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  public coffees = [];
  public coffeeOrder = [];
  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.coffees = ['Americano', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];
  }

  public addCoffee(coffee: string) {
    this.coffeeOrder.push(coffee);
  }

  public removeCoffee(coffee: string) {
    const index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) { this.coffeeOrder.splice(index, 1); }
  }

  public onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    const data = this.ordersService.form.value;
    this.ordersService.createCoffeeOrder(data)
      .then(res => {
        /* do somthing here maybe claea the form or give a succes msg */
      });

  }

}
