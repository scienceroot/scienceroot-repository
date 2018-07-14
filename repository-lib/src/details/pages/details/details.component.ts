import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {IWavesAPI} from '@waves/waves-api';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepository} from '../../../core/repository.model';
import {ScrRepositoryService} from '../../../core/repository.service';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <scr-loading [waitFor]="pageReq">
      <div onFinish>
        <ng-container *ngIf="!!repository && !!page">
          <div>
            <span class="mat-title">{{page.title}}</span>
          </div>
          <div class="container">
            <ng-container [ngSwitch]="page.type">
              <ng-container *ngSwitchCase="'markdown'">
                <scr-repository-page-detail-markdown [page]="page">
                </scr-repository-page-detail-markdown>
              </ng-container>
              <ng-container *ngSwitchDefault="">
                <scr-repository-page-detail-raw [page]="page">
                </scr-repository-page-detail-raw>
              </ng-container>
            </ng-container>
          </div>
          <mat-divider></mat-divider>
          <div class="container">
            <scr-repository-page-detail-changes [repository]="repository"
                                                [page]="page">
            </scr-repository-page-detail-changes>
          </div>
          <mat-divider></mat-divider>
          <div class="container">
            <div fxLayout="row"
                 fxLayoutGap="24px"
                 fxLayoutAlign="end">
              <div fxFlex="150px">
                <a mat-button=""
                   color="accent"
                   [routerLink]="['/repositories', repository.id]">
                  <span>Back to repository</span>
                </a>
              </div>
              <div fxFlex="100px">
                <a mat-raised-button=""
                   color="accent"
                   [routerLink]="['edit']">
                  <span>Edit</span>
                </a>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </scr-loading>
  `,
  styles: [`
    .container {
      padding: 24px
    }
  `]
})
export class ScrRepositoryPageDetailComponent implements OnInit {

  public pageReq: Promise<ScrRepositoryPage>;
  public page: ScrRepositoryPage;

  public repository: ScrRepository;

  private _wavesApi: IWavesAPI;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _repositoryService: ScrRepositoryService,
    private _dataService: ScrRepositoryDataService,
    private _wavesApiProvider: ScrWavesApiService
  ) {
    this._wavesApi = this._wavesApiProvider.wavesApi;
    this._activatedRoute.params.subscribe(params => this._onParamsChange(params));
  }

  ngOnInit(): void {

  }

  private _onParamsChange(params: any) {
    const key = params.key;
    const repositoryId = params.repositoryId;

    if (!!repositoryId && !!key) {
      this._fetch(repositoryId, key);
    }
  }

  private _fetch(repositoryId: string, key: string) {
    this.pageReq = this._repositoryService.get(repositoryId)
      .then(repository => {
        this.repository = repository;

        return this._dataService.getPageByRepository(repository, key);
      })
      .then(page => this.page = page);
  }
}
