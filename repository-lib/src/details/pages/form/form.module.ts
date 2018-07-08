import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../../../core/core.module';
import {ScrRepositoryPageFormEditComponent} from './edit.component';
import {ScrRepositoryPageFormComponent} from './form.component';
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
    ScrLoadingModule,
    ScrRepositoryCoreModule
  ],
  declarations: [
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPageFormEditComponent,
    ScrRepositoryPageFormComponent
  ],
  exports: [
    ScrRepositoryPagesNewComponent,
    ScrRepositoryPageFormEditComponent,
    ScrRepositoryPageFormComponent
  ],
  providers: []
})
export class ScrRepositoryPagesFormModule {

  constructor() {

  }
}
