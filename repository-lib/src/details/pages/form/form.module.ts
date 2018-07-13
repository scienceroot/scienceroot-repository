import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../../../core/core.module';
import {ScrRepositoryPageFormEditComponent} from './edit.component';
import {ScrRepositoryPageFeeEstimateModule} from './fee/fee.module';
import {ScrRepositoryPageFormComponent} from './form.component';
import {ScrRepositoryPagesNewComponent} from './new.component';
import {ScrTransactionListenerComponent} from './transaction-listener.component';

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
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPageFormEditComponent,
    ScrRepositoryPageFormComponent,
    ScrTransactionListenerComponent
  ],
  exports: [
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPageFormEditComponent,
    ScrRepositoryPageFormComponent,
    ScrTransactionListenerComponent
  ],
  providers: []
})
export class ScrRepositoryPagesFormModule {

  constructor() {

  }
}
