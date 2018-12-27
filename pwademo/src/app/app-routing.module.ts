import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { AddPersonComponent } from './person/add-person.component';
import { EditPersonComponent } from './person/edit-person.component';

const routes: Routes = [
  // { path: 'dev', component: DevIndexComponent },
  { path: '', component: PersonComponent },
  { path: 'add-person', component: AddPersonComponent },
  { path: 'edit-person/:id', component: EditPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
