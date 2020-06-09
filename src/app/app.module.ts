import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VechileComponent } from './vechile/vechile.component';
import { BookingComponent } from './booking/booking.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    VechileComponent,
    BookingComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
