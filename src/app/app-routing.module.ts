import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimModule } from './claim/claim.module';
import { ClaimComponent } from './claim/claim.component';

const routes: Routes = [{path: '', component: ClaimComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
