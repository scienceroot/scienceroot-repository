import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatButtonToggleModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../../../../core/core.module';
import {ScrRepositoryPageFeeEstimateModule} from '../fee/fee.module';
import {ScrRepositoryPageFormMarkdownComponent} from './form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrRepositoryCoreModule,
    ScrRepositoryPageFeeEstimateModule
  ],
  declarations: [
    ScrRepositoryPageFormMarkdownComponent
  ],
  exports: [
    ScrRepositoryPageFormMarkdownComponent
  ],
  providers: []
})
export class ScrRepositoryPageFormMarkdownModule {

  constructor() {

  }
}
