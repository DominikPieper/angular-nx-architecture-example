import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatmapFeatureSeatmapModule } from '@angular-architecture/seatmap/feature-seatmap';
import { CheckInDataAccessModule } from '@angular-architecture/check-in/data-access';

@NgModule({
  imports: [CommonModule, SeatmapFeatureSeatmapModule, CheckInDataAccessModule],
})
export class CheckInFeatureCheckInModule {}
