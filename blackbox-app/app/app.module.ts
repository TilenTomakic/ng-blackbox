import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BlackBoxModule } from '../../lib/blackbox/black-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BlackBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
