import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatTableModule ,MatIconModule,MatCardModule,MatButtonModule } from '@angular/material';
import{CompanyListModule} from '../../projects/c-company-user-list/src/lib/list.module'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CompanyListModule
  ],
  declarations: [
    AppComponent,
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
