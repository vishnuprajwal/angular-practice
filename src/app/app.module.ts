import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TriangleComponent } from './triangle/triangle.component';
import { LeapYearComponent } from './leap-year/leap-year.component';
import { MathOperationComponent } from './math-operation/math-operation.component';
import { RangeComponent } from './range/range.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    PageNotFoundComponent,
    TriangleComponent,
    LeapYearComponent,
    MathOperationComponent,
    RangeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }