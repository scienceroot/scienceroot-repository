import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatDividerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrWalletCoreModule, ScrWalletShowBalanceModule} from '@scienceroot/wallet';
import {ScrRepositoryCoreModule} from '../core/core.module';
import {ScrRepositoryDetailsComponent} from './details.component';
import {ScrRepositoryPagesModule} from './pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    ScrLoadingModule,
    ScrRepositoryCoreModule,
    ScrWalletCoreModule,
    ScrWalletShowBalanceModule,
    ScrRepositoryPagesModule
  ],
  declarations: [
    ScrRepositoryDetailsComponent
  ],
  exports: [
    ScrRepositoryDetailsComponent
  ],
  providers: []
})
export class ScrRepositoryDetailsModule {

  constructor() {

  }
}
