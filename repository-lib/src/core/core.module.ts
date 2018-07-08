import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrRepositoryDataService} from './data.service';
import {ScrRepositoryService} from './repository.service';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [
      ScrRepositoryService,
      ScrRepositoryDataService
    ]
})
export class ScrRepositoryCoreModule {

    constructor() {

    }
}
