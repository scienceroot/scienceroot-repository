import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../../../../core/core.module';
import {ScrRepositoryPageFeeEstimateModule} from '../fee/fee.module';
import {ScrRepositoryPageFormRawComponent} from './form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrRepositoryCoreModule,
    ScrRepositoryPageFeeEstimateModule
  ],
  declarations: [
    ScrRepositoryPageFormRawComponent,
  ],
  exports: [
    ScrRepositoryPageFormRawComponent,
  ],
  providers: []
})
export class ScrRepositoryPageFormRawModule {

  constructor() {

  }
}
