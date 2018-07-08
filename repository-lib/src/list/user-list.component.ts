import {Component, OnInit} from '@angular/core';
import {ScrActiveUserService} from '@scienceroot/user';
import {ScrRepository} from '../core/repository.model';
import {ScrRepositoryService} from '../core/repository.service';

@Component({
  selector: '',
  template: `
    <div class="repositories">
      <scr-loading [waitFor]="repositoriesReq">
        <div onFinish>
          <div>
            <span class="mat-headline">Your repositories</span>
          </div>
          <scr-repository-list [repositories]="repositories">
          </scr-repository-list>
        </div>
      </scr-loading>
    </div>
    <div class="actions">
      <div  fxLayout="row"
            fxLayoutAlign="end">
        <div fxFlex="130px">
          <scr-repository-list-create>
          </scr-repository-list-create>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .repositories, .actions {
      margin: 24px;
    }
  `]
})
export class ScrRepositoryUserListComponent implements OnInit {

  public repositories: ScrRepository[];
  public repositoriesReq: Promise<ScrRepository[]>;

  private readonly _userId: string;

  constructor(
    private _repositoryService: ScrRepositoryService,
    private _activeUserService: ScrActiveUserService
  ) {
    this._userId = this._activeUserService.get().uid;
    this.repositoriesReq = this._repositoryService.byUser(this._userId);
    this.repositoriesReq.then(repositories => this.repositories = repositories);
  }

  ngOnInit(): void {

  }
}
