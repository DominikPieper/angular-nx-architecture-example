import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingShellModule } from '@angular-architecture/booking/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
