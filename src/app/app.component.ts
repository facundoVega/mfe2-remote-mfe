import { Component, OnInit } from '@angular/core';
import { currentUser } from "@mezomon/shared-library-test";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'claims';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(currentUser({userName: ''}));
  }
}
