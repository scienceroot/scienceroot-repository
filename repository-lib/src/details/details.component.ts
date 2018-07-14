import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {ScrRepository} from '../core/repository.model';
import {ScrRepositoryService} from '../core/repository.service';

@Component({
  selector: '',
  template: `
    <scr-loading [waitFor]="repositoryReq">
      <div onFinish>
        <ng-container *ngIf="!!repository">
          <div class="section">
            <div fxLayout="row">
              <div fxFlex="">
                <span class="mat-headline">{{repository?.name}}</span>
              </div>
              <div fxFlex="50px">
                <scr-repository-locked [repository]="repository">
                </scr-repository-locked>
              </div>
            </div>
          </div>
          <div class="section">
            <div fxLayout="row"
                 fxLayoutGap="24px">
              <div fxFlex="130px">
                <span class="mat-caption">Public Key</span>
              </div>
              <div fxFlex="">
                <span class="mat-subheading-2">{{repository?.publicKey}}</span>
              </div>
            </div>
            <ng-container *ngIf="!!address">
              <scr-wallet-show-balance [address]="address">
              </scr-wallet-show-balance>
            </ng-container>
          </div>
          <mat-divider></mat-divider>
          <div class="section">
            <div>
              <span class="mat-title">Pages</span>
            </div>
            <scr-repository-pages [repository]="repository">
            </scr-repository-pages>
          </div>
          <mat-divider></mat-divider>
          <div class="section">
            <div  fxLayout="row"
                  fxLayoutAlign="end">
              <div fxFlex="150px">
                <a mat-button=""
                   color="accent"
                   [routerLink]="['/repositories']">
                  <span>Back to repositories</span>
                </a>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </scr-loading>
  `,
  styles: [`
    .section {padding: 24px;}
    
    scr-wallet-show-balance /deep/ .mat-title {display: none;}
  `]
})
export class ScrRepositoryDetailsComponent implements OnInit {

  public repositoryReq: Promise<ScrRepository>;
  public repository: ScrRepository;

  public address: string;

  private readonly _wavesApi: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _repositoryService: ScrRepositoryService,
    private _wavesApiProvider: ScrWavesApiService
  ) {
    this._wavesApi = this._wavesApiProvider.wavesApi;
    this._activatedRoute.params.subscribe(params => this._onParamsChange(params));
  }

  ngOnInit(): void {

  }

  private _onParamsChange(params: any) {
    const repositoryId = params.repositoryId;

    this.repositoryReq = this._repositoryService.get(repositoryId);
    this.repositoryReq.then(repository => {
      this.repository = repository;
      this.address = this._wavesApi.tools.getAddressFromPublicKey(repository.publicKey);
    });
  }
}
