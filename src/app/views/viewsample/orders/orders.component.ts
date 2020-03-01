import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {MailService} from '../../../services/mail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  public coffees = [];
  public coffeeOrder = [];
  constructor(public ordersService: OrdersService, private  mailService: MailService) { }

  public ngOnInit(): void {
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

    //this.mailService.sendMail();

    this.createContact();

  }

  public createContact() {
    this.ordersService.createContact().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }



}
