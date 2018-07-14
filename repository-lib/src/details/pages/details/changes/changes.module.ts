import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryPageDetailsChangesComponent} from './changes.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrLoadingModule
  ],
  declarations: [
    ScrRepositoryPageDetailsChangesComponent
  ],
  exports: [
    ScrRepositoryPageDetailsChangesComponent
  ],
  providers: []
})
export class ScrRepositoryPageDetailsChangesModule {

  constructor() {

  }
}
