import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './srevices/data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pagination1Component } from './pagination/pagination1/pagination1.component';
@NgModule({
  declarations: [AppComponent,
  LoginComponent,
  HomeComponent,
  Pagination1Component
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
