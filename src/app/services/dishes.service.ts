import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, orderBy, query } from '@angular/fire/firestore';
import { Restaurant } from '../models/restaurant';
import { Dish } from '../models/dish';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private firestore: Firestore) {}

  getDishesCollectionReference(restaurantKey: string) {
    return collection(
      this.firestore,
      Restaurant.REF,
      restaurantKey,
      Dish.REF
    ).withConverter<Dish>({
      toFirestore: (dataStore) => ({ ...dataStore }),
      fromFirestore: (object): Dish => ({
        ...(object.data() as Dish),
      }),
    });
  }

  getDishesByRestaurantKey(restaurantKey: string) {
    const dishesRef = this.getDishesCollectionReference(restaurantKey);
    const q = query(dishesRef, orderBy('createdAt', 'desc'));
    return collectionData(q).pipe(map((d) => d as Dish[]));
  }

  getDishById(restaurantKey: string, key: string): Observable<Dish>{
    const dishesRef = doc(this.getDishesCollectionReference(restaurantKey), key);
    return docData(dishesRef).pipe(map((data) => data as Dish));
  }

}
