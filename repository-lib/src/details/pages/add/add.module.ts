import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrRepositoryPageAddComponent} from './add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [
    ScrRepositoryPageAddComponent
  ],
  exports: [
    ScrRepositoryPageAddComponent
  ],
  providers: []
})
export class ScrRepositoryPageAddModule {

  constructor() {

  }
}
