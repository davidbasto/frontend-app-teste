import { DashboardComponent } from './dashboard/dashboard.component';
import { UfComponent } from './uf/uf.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: UfComponent },
{ path: 'dashboard', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
