import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {IWavesAPI} from '@waves/waves-api';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepository} from '../../../core/repository.model';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <scr-loading [waitFor]="pageReq">
      <div onFinish>
        <ng-container *ngIf="!!page">
          <div>
            <span class="mat-title">{{page.title}}</span>
          </div>
          <div class="text-container">
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
          <div fxLayout="row" 
               fxLayoutGap="24px"
               fxLayoutAlign="end">
            <div fxFlex="150px">
              <a mat-button="" 
                 color="accent"
                 [routerLink]="['/repositories', repositoryId]">
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
        </ng-container>
      </div>
    </scr-loading>
  `,
  styles: [`
    .text-container {
      padding: 24px
    }
  `]
})
export class ScrRepositoryPageDetailComponent implements OnInit {

  public pageReq: Promise<ScrRepositoryPage>;
  public page: ScrRepositoryPage;

  public repositoryId: string;

  private _wavesApi: IWavesAPI;

  constructor(
    private _activatedRoute: ActivatedRoute,
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
    this.repositoryId = params.repositoryId;

    if (!!this.repositoryId && !!key) {
      this._fetchPage(this.repositoryId, key);
    }
  }

  private _fetchPage(repositoryId: string, key: string) {
    this.pageReq = this._dataService.getPageByRepository(repositoryId, key);
    this.pageReq.then(page => this.page = page);
  }
}
