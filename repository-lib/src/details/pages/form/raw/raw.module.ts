import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrRepositoryCoreModule} from '../../../../core/core.module';
import {ScrRepositoryPageFeeEstimateModule} from '../fee/fee.module';
import {ScrRepositoryPageFormNewRawComponent, ScrRepositoryPageFormRawComponent} from './form.component';
import {ScrRepositoryPageFormRawNewComponent} from './new.component';

@NgModule({
    imports: [
        CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      RouterModule,
      MatInputModule,
      MatButtonModule,
      ScrLoadingModule,
      ScrRepositoryCoreModule,
      ScrRepositoryPageFeeEstimateModule,
    ],
    declarations: [
      ScrRepositoryPageFormRawComponent,
      ScrRepositoryPageFormRawNewComponent
    ],
    exports: [
      ScrRepositoryPageFormRawComponent,
      ScrRepositoryPageFormRawNewComponent
    ],
    providers: []
})
export class ScrRepositoryPageFormRawModule {

    constructor() {

    }
}
