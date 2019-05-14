import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import {MatTableModule ,MatIconModule,MatCardModule,MatButtonModule } from '@angular/material';
import { CompanyService } from './services/company.service';
import { SettingsService } from './services/settings.service';

import { CompanyContainerComponent } from './company-container/company-container.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    CompanyListComponent,
    CompanyDetailsComponent,
    CompanyContainerComponent,
    CompanySettingsComponent
  ],
  providers: [CompanyService,SettingsService],
  exports: [CompanyContainerComponent]
  })

export class CompanyListModule { }


