import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DateComponent } from './date/date.component';
import { TriangleComponent } from './triangle/triangle.component';
import { LeapYearComponent } from './leap-year/leap-year.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'date', component: DateComponent },
	{ path: 'triangle', component: TriangleComponent },
	{ path: 'leap-year', component: LeapYearComponent },
	{ path: '**', component: PageNotFoundComponent }
	
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes),CommonModule ],
	exports: [
		RouterModule,

	]
})
export class AppRoutingModule { }
