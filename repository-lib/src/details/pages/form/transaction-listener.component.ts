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
    <ng-container *ngIf="!!transactionId">
      <div>
        <span class="mat-subheading-1">Saving in progress</span>
      </div>
      <div>
        <span class="mat-body-1">Waiting for approval of data transaction. This can take a few seconds.</span>
      </div>
    </ng-container>
  `,
  styles: [`

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
          tap(res => console.log(res))
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
