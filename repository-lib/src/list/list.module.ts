import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrRepositoryCoreModule} from '../core/core.module';
import {ScrRepositoryListCreateModule} from './create/create.module';
import {ScrRepositoryListComponent} from './list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexLayoutModule,
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
