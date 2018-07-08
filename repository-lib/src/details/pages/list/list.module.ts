import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrRepositoryPageListComponent} from './list.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
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
