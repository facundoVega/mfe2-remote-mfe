import { Component, OnInit } from '@angular/core';
import {  activeUSer } from '@mezomon/shared-library-test';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

@Component({
  selector: 'claim',
  templateUrl: './claim.component.html',
  styleUrl: './claim.component.scss'
})
export class ClaimComponent implements OnInit {
  
  private store!: Store
  $user!: Observable<string | undefined>
  constructor(
      ) {}
  
  ngOnInit(): void {
    if((window as any).Store)  {
      this.store = (window as any).Store;
      this.$user =  this.store.select(activeUSer)
    }
    
  }
}
