import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { msalGuardCanActivate } from '@mezomon/shared-library-test';

const routes: Routes = [
  {path: '', component: ClaimComponent,  canActivate:  [msalGuardCanActivate]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
