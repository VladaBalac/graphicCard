import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from '../card/card-list/card-list.component';
import { HomeComponent } from '../card/home/home.component';
import { ComFormComponent } from '../card/com-form/com-form.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: '', redirectTo:'/card', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[
  	RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
