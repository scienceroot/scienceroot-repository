import {Component, EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {IWavesAPI} from '@waves/waves-api';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {interval} from 'rxjs/observable/interval';
import {delay, flatMap, retry, tap} from 'rxjs/operators';

@Component({
  selector: 'ays-transaction-listener',
  template: `
    <ng-container *ngIf="error">
      <span class="mat-error">An error occurred.</span>
    </ng-container>
    <div fxLayout="row" 
         fxLayoutAlign="center">
      <div fxFlex="600px">
        <ng-container *ngIf="!!transactionId">
          <div fxLayout="row" 
               fxLayoutGap="24px">
            <div fxFlex="41px">
              <div id="loader">
                <div id="top"></div>
                <div id="bottom"></div>
                <div id="line"></div>
              </div>
            </div>
            <div  fxFlex="" 
                  fxFlexAlign="center"
                  class="loader-container">
              <div>
                <span class="mat-subheading-2">Saving in progress</span>
              </div>
              <div>
                <span class="mat-body-1">Waiting for approval of data transaction. This can take a few seconds.</span>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .loader-container {height: 40px;}
    
    #loader {
      animation: loader 5s cubic-bezier(.8,0,.2,1) infinite;
      height: 40px;
      width: 41px;
    }

    @keyframes loader {
      90% { transform: rotate(0deg); }
      100% { transform: rotate(180deg); }
    }
    #top {
      animation: top 5s linear infinite;
      border-top: 20px solid #8845fa;
      border-right: 20px solid transparent;
      border-left: 20px solid transparent;
      height: 0px;
      width: 1px;
      transform-origin: 50% 100%;
    }
    @keyframes top {
      90% { transform: scale(0); }
      100% { transform: scale(0);}
    }
    #bottom {
      animation: bottom 5s linear infinite;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #8845fa;
      border-left: 20px solid transparent;
      height: 0px;
      width: 1px;
      transform: scale(0);
      transform-origin: 50% 100%;
    }
    @keyframes bottom {
      10% { transform: scale(0); }
      90% { transform: scale(1); }
      100% { transform: scale(1); }
    }
    #line {
      animation: line 5s linear infinite;
      border-left: 1px dotted #8845fa;
      height: 0px;
      width: 0px;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    @keyframes line {
      10% { height: 20px; }
      100% { height: 20px; }
    }
  `]
})
export class ScrTransactionListenerComponent implements OnChanges {

  @Input() transactionId: string;

  @Output() transactionSuccess: EventEmitter<any> = new EventEmitter<any>();

  public success: boolean = false;
  public error: boolean = false;

  private _wavesApi: IWavesAPI;

  constructor(
    private _wavesApiProvider: ScrWavesApiService
  ) {
    this._wavesApi = this._wavesApiProvider.wavesApi;
  }

  ngOnChanges(changes: any): void {
    if (changes.transactionId) {
      this._onTransactionIdChange(changes.transactionId);
    }
  }

  private _onTransactionIdChange(transactionIdChange: SimpleChange) {
    if (!!transactionIdChange.currentValue) {
      const transactionId = transactionIdChange.currentValue;
      const sub = interval(2000)
        .pipe(
          flatMap(() => fromPromise(this._wavesApi.API.Node.v1.transactions.get(transactionId))),
          retry(15),
        )
        .subscribe(
          (tx: any) => {
            this.success = true;
            this.error = false;
            this.transactionSuccess.emit(tx);
            sub.unsubscribe();
          },
          () => {
            this.success = false;
            this.error = true;
          }
        );

    }
  }

}
