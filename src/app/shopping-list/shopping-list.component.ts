import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,
AngularFirestoreDocument } from 'angularfire2/firestore';
import { Ingredient } from '../shared/ingredient.model';

export interface Item { name: string; amount: number; }

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  /* ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]; */

  
  itemsCollection: any // AngularFirestoreCollection<Item>
  ingredients: Observable<Ingredient[]>;

  constructor(private readonly afs: AngularFirestore
     ) {}

  ngOnInit() {
    this.itemsCollection = this.afs.collection<Item>('items');
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    this.ingredients = this.itemsCollection.valueChanges();
  }

  
}
