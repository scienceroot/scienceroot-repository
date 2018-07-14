import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrRepositoryPageDetailRawComponent} from './raw.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      ScrRepositoryPageDetailRawComponent
    ],
    exports: [
      ScrRepositoryPageDetailRawComponent
    ],
    providers: []
})
export class ScrRepositoryPageDetailRawModule {

    constructor() {

    }
}
