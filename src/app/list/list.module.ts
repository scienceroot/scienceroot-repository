import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ScrRepositoryListModule} from '@scienceroot/repository';
import {ScrAuthenticationGuard} from '@scienceroot/security';
import {ListComponent} from './list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'list', component: ListComponent, canActivate: [ScrAuthenticationGuard]}
    ]),
    ScrRepositoryListModule
  ],
  declarations: [ListComponent]
})
export class ListModule {
}
