import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  public coffeeOrders: any[] = [];
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getCoffeeOrders()
      .subscribe((res: any[]) => {
        this.coffeeOrders = res;
      })
  }

  public markCompleted(order: any) {
    this.ordersService.updateCoffeeOrder(order);
  }

  public deleteOrder(order: any) {
    this.ordersService.deleteOrder(order);
  }
}
