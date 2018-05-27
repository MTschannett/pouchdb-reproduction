import { Component } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDbFind from 'pouchdb-find';

interface IKitten {
  _id: string;
  _rev: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  data: IKitten[];

  constructor() {
    PouchDB.plugin(PouchDbFind);
    const localdb = new PouchDB<IKitten>('kitten');
    const db = new PouchDB<IKitten>('http://127.0.0.1:5984/kittens');

    setTimeout(
      () => localdb.find({ selector: {} }).then(res => (this.data = res.docs)),
      3000,
    );
  }
}
