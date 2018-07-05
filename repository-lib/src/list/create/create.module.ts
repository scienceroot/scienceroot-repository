import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatDialogModule, MatIconModule} from '@angular/material';
import {ScrActiveUserModule} from '@scienceroot/user';
import {ScrRepositoryFormModule} from '../../form/form.module';
import {ScrRepositoryListCreateDialogComponent} from './create-dialog.component';
import {ScrRepositoryListCreateComponent} from './create.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ScrActiveUserModule,
    ScrRepositoryFormModule
  ],
  declarations: [
    ScrRepositoryListCreateComponent,
    ScrRepositoryListCreateDialogComponent
  ],
  exports: [
    ScrRepositoryListCreateComponent
  ],
  providers: [],
  entryComponents: [
    ScrRepositoryListCreateDialogComponent
  ]
})
export class ScrRepositoryListCreateModule {

  constructor() {

  }
}
