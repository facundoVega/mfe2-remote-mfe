import { Component, OnInit } from '@angular/core';
import { LibRoute, MsalCustomService, currentUser } from "@mezomon/shared-library-test";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  routes: LibRoute[] = [
    { title: 'claims', link:''}
  ]

}
