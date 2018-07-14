import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrRepositoryPageDetailMarkdownComponent} from './markdown.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
      ScrRepositoryPageDetailMarkdownComponent
    ],
    exports: [
      ScrRepositoryPageDetailMarkdownComponent
    ],
    providers: []
})
export class ScrRepositoryPageDetailMarkdownModule {

    constructor() {

    }
}
