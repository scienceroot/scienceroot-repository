import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {ScrRepositoryCoreModule} from '../core/core.module';
import {ScrRepositoryFormNewComponent} from './new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ScrRepositoryCoreModule
  ],
  declarations: [
    ScrRepositoryFormNewComponent
  ],
  exports: [
    ScrRepositoryFormNewComponent
  ],
  providers: []
})
export class ScrRepositoryFormModule {

  constructor() {

  }
}
