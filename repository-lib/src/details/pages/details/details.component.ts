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
            <span class="mat-title">{{page.key}}</span>
          </div>
          <div>
            <span class="mat-body-2">{{page.text}}</span>
          </div>
          <div fxLayout="row" 
               fxLayoutAlign="end">
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

  `]
})
export class ScrRepositoryPageDetailComponent implements OnInit {

  public pageReq: Promise<ScrRepositoryPage>;
  public page: ScrRepositoryPage;
  public repository: ScrRepository;

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
    const repositoryId = params.repositoryId;

    if (!!repositoryId && !!key) {
      this._fetchPage(repositoryId, key);
    }
  }

  private _fetchPage(repositoryId: string, key: string) {
    this.pageReq = this._dataService.getPageByRepository(repositoryId, key);
    this.pageReq.then(page => this.page = page);
  }
}
