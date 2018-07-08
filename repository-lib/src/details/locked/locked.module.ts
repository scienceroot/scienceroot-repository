import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrRepositoryLockedComponent} from './locked.component';
import {ScrRepositoryUnlockComponent} from './unlock.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [
    ScrRepositoryLockedComponent,
    ScrRepositoryUnlockComponent
  ],
  exports: [
    ScrRepositoryLockedComponent
  ],
  providers: [],
  entryComponents: [
    ScrRepositoryUnlockComponent
  ]
})
export class ScrRepositoryLockedModule {

  constructor() {

  }
}
