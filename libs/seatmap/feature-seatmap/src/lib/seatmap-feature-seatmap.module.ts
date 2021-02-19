import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatmapDataAccessModule } from '@angular-architecture/seatmap/data-access';

@NgModule({
  imports: [CommonModule, SeatmapDataAccessModule],
})
export class SeatmapFeatureSeatmapModule {}
