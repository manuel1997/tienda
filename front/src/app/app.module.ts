import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntercepModule } from './core/intercep/intercep.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntercepModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
