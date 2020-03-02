import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {BookmarksUser} from '../models/bookmarksUser';
import {Page} from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private usersAndPagesV1 = undefined;
  private citiesRef = undefined;
  public constructor(private db: AngularFirestore) {
     this.usersAndPagesV1 = db.collection('usersAndPagesV1');
     this.citiesRef = db.collection('cities');
    let setSf = this.citiesRef.doc('SF').set({
      name: 'San Francisco', state: 'CA', country: 'USA',
      capital: false, population: 860000
    });
    let setLa = this.citiesRef.doc('LA').set({
      name: 'Los Angeles', state: 'CA', country: 'USA',
      capital: false, population: 3900000
    });
  }

  // public createCoffeeOrder(data: any) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.firestore
  //       .collection('coffeeOrders')
  //       .add(data)
  //       .then(res => res, err => reject(err));
  //   });
  // }
  //

  // public getPages(userId: string) {
  // }

  public getUser(userId: string): Observable<BookmarksUser> {
    let userRef = this.db.collection('fw-users').doc(userId);

    return new Observable((observer) => {
      return userRef.get().subscribe(
      (doc) =>
      {
        if (!doc.exists) {
          return observer.error({error: "no doc found"})
        } else {
          return observer.next(new BookmarksUser((doc.data())));
        }
      },
      (err) =>
      {
        return observer.error({error: err})
      })

    });

  }

  public getPages(pageId: string): Observable<Page> {
    let pageRef = this.db.collection('fw-pages').doc(pageId);

    return new Observable((observer) => {
      return pageRef.get().subscribe(
        (doc) =>
        {
          if (!doc.exists) {
            return observer.error({error: "no doc found"})
          } else {
            return observer.next(new Page(doc.data()));
          }
        },
        (err) =>
        {
          return observer.error({error: err})
        })

    });

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
