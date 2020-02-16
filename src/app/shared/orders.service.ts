import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public form: FormGroup;

  constructor(private firestore: AngularFirestore) {
      this.form = new FormGroup({
      customerName: new FormControl(''),
      orderNumber: new FormControl(''),
      coffeeOrder: new FormControl(''),
      completed: new FormControl('')
    });
  }

  public createCoffeeOrder(data: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('coffeeOrders')
        .add(data)
        .then(res => res, err => reject(err));
    });
  }

  public getCoffeeOrders() {
    return this.firestore.collection('coffeeOrders')
      .snapshotChanges();
  }

  public updateCoffeeOrder(data: any) {
    return this.firestore
      .collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge:true });
  }

  public deleteOrder(data: any) {
    return this.firestore
      .collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .delete();
  }
}
