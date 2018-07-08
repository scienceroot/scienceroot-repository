import {Component, Input, OnInit} from '@angular/core';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {IWavesAPI} from '@waves/waves-api';
import {ScrRepositoryDataService} from '../../core/data.service';
import {ScrRepository} from '../../core/repository.model';
import {ScrRepositoryPage} from './page.model';

@Component({
  selector: 'scr-repository-pages',
  template: `
    <div>
      <scr-loading [waitFor]="pagesReq">
        <div onFinish>
          <ng-container *ngIf="!!pages">
            <scr-repository-page-list [repository]="repository" 
                                      [pages]="pages">
            </scr-repository-page-list>
          </ng-container>
        </div>
      </scr-loading>
    </div>
    <div fxLayout="row" 
         fxLayoutAlign="end">
      <div fxFlex="100px">
        <a  mat-raised-button=""
            [routerLink]="['/repositories', repository.id, 'pages', 'new']">
          <span>New page</span>
        </a>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPagesComponent implements OnInit {

  @Input() repository: ScrRepository;

  public pages: ScrRepositoryPage[];
  public pagesReq: Promise<ScrRepositoryPage[]>;

  private readonly _wavesApi: IWavesAPI;

  constructor(
    private _wavesApiProvider: ScrWavesApiService,
    private _dataService: ScrRepositoryDataService
  ) {
    this._wavesApi = this._wavesApiProvider.wavesApi;
  }

  ngOnInit(): void {
    const address = this._wavesApi.tools.getAddressFromPublicKey(this.repository.publicKey);
    this.pagesReq = this._dataService.getPages(address);
    this.pagesReq.then(pages => this.pages = pages);
  }
}
