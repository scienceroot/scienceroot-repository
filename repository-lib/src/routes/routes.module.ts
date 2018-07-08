import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ScrAuthenticationGuard, ScrAuthenticationModule} from '@scienceroot/security';
import {ScrRepositoryDetailsComponent} from '../details/details.component';
import {ScrRepositoryDetailsModule} from '../details/details.module';
import {ScrRepositoryPagesNewComponent} from '../details/pages/form/new.component';
import {ScrRepositoryPagesModule} from '../details/pages/pages.module';
import {ScrRepositoryListModule} from '../list/list.module';
import {ScrRepositoryUserListComponent} from '../list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'repositories',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: ScrRepositoryUserListComponent
          },
          {
            path: ':repositoryId',
            children: [
              {path: '', pathMatch: 'full', component: ScrRepositoryDetailsComponent},
              {
                path: 'pages',
                children: [
                  {path: 'new', component: ScrRepositoryPagesNewComponent}
                ]
              }
            ]
          }
        ]
      }
    ]),
    ScrAuthenticationModule,
    ScrRepositoryListModule,
    ScrRepositoryDetailsModule,
    ScrRepositoryPagesModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class ScrRepositoryRoutesModule {

  constructor() {

  }
}
