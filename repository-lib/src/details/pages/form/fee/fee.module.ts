import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';
import {ScrRepositoryPageFeeEstimateComponent} from './fee.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    ScrRepositoryPageFeeEstimateComponent
  ],
  exports: [
    ScrRepositoryPageFeeEstimateComponent
  ],
  providers: []
})
export class ScrRepositoryPageFeeEstimateModule {

  constructor() {

  }
}
