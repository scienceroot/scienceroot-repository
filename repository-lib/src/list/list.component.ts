import {Component, Input, OnInit} from '@angular/core';
import {ScrActiveUserService} from '@scienceroot/user';
import {ScrRepository} from '../core/repository.model';
import {ScrRepositoryService} from '../core/repository.service';

@Component({
  selector: 'scr-repository-list',
  template: `
    <div class="repositories">
      <scr-loading [waitFor]="repositoriesReq">
        <div onFinish>
          <ng-container *ngFor="let repository of repositories">
            <div class="repository">
              <div fxLayout="row">
                <div fxFlex="">
                  <span class="mat-subheading-1">{{repository.name}}</span>
                </div>
                <div fxFlex="75px">
                  <button mat-raised-button=""
                          color="accent">
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
            <mat-divider></mat-divider>
          </ng-container>
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
    
    .repository {
      margin: 12px 0;
    }
  `]
})
export class ScrRepositoryListComponent implements OnInit {

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
