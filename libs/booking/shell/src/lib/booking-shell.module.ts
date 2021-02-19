import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDataAccessModule } from '@angular-architecture/booking/data-access';

@NgModule({
  imports: [CommonModule, BookingDataAccessModule],
})
export class BookingShellModule {}
