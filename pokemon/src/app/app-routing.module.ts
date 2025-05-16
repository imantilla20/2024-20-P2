import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer/trainer-detail/trainer-detail.component';

const routes: Routes = [
  {path: '', component:TrainerListComponent},
  {path:'trainers', component:TrainerListComponent},
  {path:'trainers/:id', component:TrainerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
