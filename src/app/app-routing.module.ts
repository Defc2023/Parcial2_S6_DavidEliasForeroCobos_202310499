import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineListComponent } from './airline/airline-list/airline-list.component';

const routes: Routes = [
  { path: '', component: AirlineListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
