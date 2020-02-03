import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
