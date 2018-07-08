import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrRepositoryPagesFormModule} from './form/form.module';
import {ScrRepositoryPagesComponent} from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrRepositoryPagesFormModule
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
