import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatDividerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../../../core/core.module';
import {ScrRepositoryPageDetailsChangesModule} from './changes/changes.module';
import {ScrRepositoryPageDetailComponent} from './details.component';
import {ScrRepositoryPageDetailMarkdownModule} from './markdown/markdown.module';
import {ScrRepositoryPageDetailRawModule} from './raw/raw.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    ScrLoadingModule,
    ScrRepositoryCoreModule,
    ScrRepositoryPageDetailsChangesModule,
    ScrRepositoryPageDetailRawModule,
    ScrRepositoryPageDetailMarkdownModule
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
