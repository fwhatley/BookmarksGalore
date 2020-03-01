import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public form: FormGroup;

  public constructor(private firestore: AngularFirestore, private httpClient: HttpClient) {
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

  public createContact(): Observable<any> {
    const body = {
      firstName: "fredy",
      lastName: "whatley",
      email: "fredywhatley@gmail.com"
    };
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    return this.httpClient.post("https://us-central1-bookmarksgalore.cloudfunctions.net/api/v1/contacts", body, {headers})
  }
}
