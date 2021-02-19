import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@angular-architecture/shared/data-access';
@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
})
export class BookingDataAccessModule {}
