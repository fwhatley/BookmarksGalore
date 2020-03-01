import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public constructor(private firestore: AngularFirestore) { }

  // public createCoffeeOrder(data: any) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.firestore
  //       .collection('coffeeOrders')
  //       .add(data)
  //       .then(res => res, err => reject(err));
  //   });
  // }
  //
  public getPages() {
    return this.firestore.collection('pagesAndUsers')
      .snapshotChanges();
  }

  public getPage(pageId: string) {
    return this.firestore.collection('coffeeOrders')
      .snapshotChanges();
  }
  //
  // public updateCoffeeOrder(data: any) {
  //   return this.firestore
  //     .collection('coffeeOrders')
  //     .doc(data.payload.doc.id)
  //     .set({ completed: true }, { merge:true });
  // }
  //
  // public deleteOrder(data: any) {
  //   return this.firestore
  //     .collection('coffeeOrders')
  //     .doc(data.payload.doc.id)
  //     .delete();
  // }
}
