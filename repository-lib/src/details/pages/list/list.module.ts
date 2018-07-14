import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrRepositoryPageAddModule} from '../add/add.module';
import {ScrRepositoryPageListComponent} from './list.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FlexLayoutModule,
      MatButtonModule
    ],
    declarations: [
      ScrRepositoryPageListComponent
    ],
    exports: [
      ScrRepositoryPageListComponent
    ],
    providers: []
})
export class ScrRepositoryPageListModule {

    constructor() {

    }
}
