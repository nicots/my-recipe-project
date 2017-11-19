import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;
  ingredient: Item

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.itemDoc = this.afs.doc<Item>('items/1');
    this.ingredient = {
      name: '',
      amount: 0
    }
  }

  public addItem(): void {
    // Persist a document id
    const id = this.afs.createId();
    const item: Item = { name: this.ingredient.name, amount: this.ingredient.amount };
    const shirtsCollection = this.afs.collection<Item>('items');
    shirtsCollection.add(item);
  }

  /**
   * deleteItem
   */
  public deleteItem() {
    
  }

  /**
   * clearAll
   */
  public clearAllItems(){
    const shirtsCollection = this.afs.collection<Item>('items')

    shirtsCollection.doc('items/1').delete().then(data => {}).catch(error => {})
  }
}
