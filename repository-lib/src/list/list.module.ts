import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatDividerModule} from '@angular/material';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../core/core.module';
import {ScrRepositoryListCreateModule} from './create/create.module';
import {ScrRepositoryListComponent} from './list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrRepositoryCoreModule,
    ScrRepositoryListCreateModule
  ],
  declarations: [
    ScrRepositoryListComponent
  ],
  exports: [
    ScrRepositoryListComponent
  ],
  providers: []
})
export class ScrRepositoryListModule {

  constructor() {

  }
}
