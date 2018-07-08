import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../../../core/core.module';
import {ScrRepositoryPageDetailComponent} from './details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrRepositoryCoreModule,
  ],
  declarations: [
    ScrRepositoryPageDetailComponent
  ],
  exports: [
    ScrRepositoryPageDetailComponent
  ],
  providers: []
})
export class ScrRepositoryPageDetailModule {

  constructor() {

  }
}
