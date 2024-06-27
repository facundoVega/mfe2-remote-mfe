import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim.component';

const routes: Routes = [{ path: '', component: ClaimComponent }];

@NgModule({
  declarations: [ClaimComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ClaimModule {}