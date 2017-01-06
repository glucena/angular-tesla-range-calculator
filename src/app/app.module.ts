/*
 * app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// battery module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module'

// app module
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeslaBatteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
