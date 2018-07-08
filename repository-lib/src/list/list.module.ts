import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatDividerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../core/core.module';
import {ScrRepositoryListCreateModule} from './create/create.module';
import {ScrRepositoryListComponent} from './list.component';
import {ScrRepositoryUserListComponent} from './user-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrRepositoryCoreModule,
    ScrRepositoryListCreateModule
  ],
  declarations: [
    ScrRepositoryListComponent,
    ScrRepositoryUserListComponent
  ],
  exports: [
    ScrRepositoryListComponent,
    ScrRepositoryUserListComponent
  ],
  providers: []
})
export class ScrRepositoryListModule {

  constructor() {

  }
}
