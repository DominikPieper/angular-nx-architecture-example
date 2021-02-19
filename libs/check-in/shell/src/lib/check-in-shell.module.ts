import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInFeatureCheckInModule } from '@angular-architecture/check-in/feature-check-in';

@NgModule({
  imports: [CommonModule, CheckInFeatureCheckInModule],
})
export class CheckInShellModule {}
