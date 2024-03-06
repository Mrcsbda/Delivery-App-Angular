
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { CollectionReference, Firestore, collectionData, orderBy, query } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  public readonly restaurantsCollectionREF!: CollectionReference<Restaurant>;
  constructor(private firestore: Firestore) {
    this.restaurantsCollectionREF = collection(this.firestore, Restaurant.REF).withConverter<Restaurant>({
      toFirestore: (dataStore) => ({
        ...dataStore
      }),
      fromFirestore: (object): Restaurant => ({
        ...(object.data() as Restaurant)
      })
    })
   }

  getRestaurants(): Observable<Restaurant[]> {
    const q = query(this.restaurantsCollectionREF, orderBy('createdAt', 'desc'));
    return collectionData(q).pipe(
      map((restaurants) => restaurants as Restaurant[])
    )
  }
}
