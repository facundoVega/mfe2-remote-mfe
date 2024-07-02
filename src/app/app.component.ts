import { Component, OnInit } from '@angular/core';
import { LibRoute, MsalCustomService, activeUSer, currentUser } from "@mezomon/shared-library-test";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  routes: LibRoute[] = [
    { title: 'claims', link:''}
  ]

  user!:string
  $user = this.store.select(activeUSer)
  constructor(
    private msalCustomService: MsalCustomService,
    private store: Store,
  ) {
  }

  getStore(): Store {
    return this.store;
  }

  ngOnInit(): void {
    this.msalCustomService.checkLogin().subscribe((userName)=> { 
      this.user = userName;
      this.store.dispatch(currentUser({userName: this.user}));
    });
  }
  logout(): void {
    this.msalCustomService.logout();
  }
}
