import {Component, Input, OnInit} from '@angular/core';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {IWavesAPI} from '@waves/waves-api';
import {ScrRepository} from '../../../../core/repository.model';
import {ScrRepositoryPage} from '../../page.model';

@Component({
  selector: 'scr-repository-page-detail-changes',
  template: `
    <div>
      <span class="mat-title">Page history</span>
    </div>
   <scr-loading [waitFor]="changeTxListReq">
     <div onFinish>
       <ng-container *ngIf="!!changeTxList">
         <div fxLayout="row"
              fxLayoutGap="24px">
           <div fxFlex="">
             <span class="mat-caption">Transaction ID</span>
           </div>
           <div fxFlex="200px">
             <span class="mat-caption">Transaction date</span>
           </div>
           <div fxFlex="75px">
             <span class="mat-caption">Explorer Link</span>
           </div>
         </div>
         <ng-container *ngFor="let tx of changeTxList">
           <div fxLayout="row"
                fxLayoutGap="24px">
             <div fxFlex="">
               <span class="mat-body-2">{{tx.id}}</span>
             </div>
             <div fxFlex="200px">
               <span class="mat-body-2">{{tx.timestamp | date:'medium'}}</span>
             </div>
             <div fxFlex="75px">
               <a  mat-button=""
                   color="accent"
                   target="_blank"
                   rel="noopener"
                   [href]="'https://explorer.scienceblock.org/tx/' + tx.id">
                 <span>Explorer</span>
               </a>
             </div>
           </div>
         </ng-container>
       </ng-container>
     </div>
   </scr-loading>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageDetailsChangesComponent implements OnInit {

  @Input() repository: ScrRepository;
  @Input() page: ScrRepositoryPage;

  public changeTxList: any[];
  public changeTxListReq: Promise<any[]>;

  private _wavesApi: IWavesAPI;

  constructor(
    private _wavesProvider: ScrWavesApiService
  ) {
    this._wavesApi = this._wavesProvider.wavesApi;
  }

  ngOnInit(): void {
    const address = this._wavesApi.tools.getAddressFromPublicKey(this.repository.publicKey);

    this.changeTxListReq = this._wavesApi.API.Node.v1.transactions.getList(address)
      .then(txList => this.changeTxList = this._filterTransactions(txList));
  }

  private _filterTransactions(txList: any[]): any[] {
    const dataTxList = txList.filter(tx => tx.type === 12);
    const resultTxList = [];

    dataTxList.forEach(dataTx => {
      let isPageTx: boolean = false;

      dataTx.data.every(dataEntry => {
        if (dataEntry.key === this.page.key) {
          isPageTx = true;
        }
      });

      if (isPageTx) {
        resultTxList.push(dataTx);
      }
    });

    return resultTxList;
  }
}
