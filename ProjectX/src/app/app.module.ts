import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './prediction/service.service';
import { FormsModule } from '@angular/forms';
import { CompareComponent } from './compare/compare.component';
import { HomeComponent } from './home/home.component';
import { MonteCarloComponent } from './monte-carlo/monte-carlo.component';
import { CompareServiceService } from './compare/compare-service.service';
import { MonteServiceService } from './monte-carlo/monte-service.service';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { BasicMonteComponent } from './basic-monte/basic-monte.component';
import { BasicMonteService } from './basic-monte/basic-monte.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CompareComponent,
    HomeComponent,
    MonteCarloComponent,
    BasicMonteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextInputAutocompleteModule,
    
  ],
  providers: [ServiceService, CompareServiceService, MonteServiceService, BasicMonteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
