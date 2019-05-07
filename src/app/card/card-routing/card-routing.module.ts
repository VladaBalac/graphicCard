import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CardListComponent } from '../card-list/card-list.component';
import { ComFormComponent } from '../com-form/com-form.component';

const cardRoutes :Routes = [
{
	path:'card',
	component:CardListComponent,
	children: [
	{
		path:':id/comments',
		component:ComFormComponent
	}
	]
}
]

@NgModule({
	imports: [
	CommonModule,
	RouterModule.forChild(cardRoutes)
	],
	exports: [
	RouterModule
	]
})
export class CardRoutingModule { }
