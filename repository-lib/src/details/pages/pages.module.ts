import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryPageDetailComponent} from './details/details.component';
import {ScrRepositoryPageDetailModule} from './details/details.module';
import {ScrRepositoryPagesFormModule} from './form/form.module';
import {ScrRepositoryPageAddModule} from './add/add.module';
import {ScrRepositoryPageListModule} from './list/list.module';
import {ScrRepositoryPagesComponent} from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrRepositoryPagesFormModule,
    ScrRepositoryPageListModule,
    ScrRepositoryPageDetailModule,
    ScrRepositoryPageAddModule
  ],
  declarations: [
    ScrRepositoryPagesComponent
  ],
  exports: [
    ScrRepositoryPagesComponent
  ],
  providers: []
})
export class ScrRepositoryPagesModule {

  constructor() {

  }
}
