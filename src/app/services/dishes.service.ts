import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Restaurant } from '../models/restaurant';
import { Dish } from '../models/dish';
import { map } from 'rxjs';

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

}
