import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckInShellModule } from '@angular-architecture/check-in/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckInShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
