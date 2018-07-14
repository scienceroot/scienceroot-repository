import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryPageFormEditComponent} from './edit.component';
import {ScrRepositoryPageFormProxyComponent} from './form-proxy.component';
import {ScrRepositoryPagesNewComponent} from './new.component';
import {ScrRepositoryPageFormRawModule} from './raw/raw.module';
import {ScrTransactionListenerComponent} from './transaction-listener.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrRepositoryPageFormRawModule
  ],
  declarations: [
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPageFormEditComponent,
    ScrTransactionListenerComponent,
    ScrRepositoryPageFormProxyComponent,
  ],
  exports: [
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPageFormEditComponent,
    ScrTransactionListenerComponent,
    ScrRepositoryPageFormProxyComponent,
  ],
  providers: []
})
export class ScrRepositoryPagesFormModule {

  constructor() {

  }
}
