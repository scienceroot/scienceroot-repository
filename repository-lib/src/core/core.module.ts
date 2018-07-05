import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrRepositoryService} from './repository.service';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [
      ScrRepositoryService
    ]
})
export class ScrRepositoryCoreModule {

    constructor() {

    }
}
