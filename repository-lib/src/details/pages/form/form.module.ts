import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrRepositoryCoreModule} from '../../../core/core.module';
import {ScrRepositoryPagesFormComponent} from './form.component';
import {ScrRepositoryPagesNewComponent} from './new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    ScrRepositoryCoreModule
  ],
  declarations: [
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPagesFormComponent
  ],
  exports: [
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPagesFormComponent
  ],
  providers: []
})
export class ScrRepositoryPagesFormModule {

  constructor() {

  }
}
