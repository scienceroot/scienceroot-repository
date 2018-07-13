import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {IWavesAPI} from '@waves/waves-api';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {delay, retry, tap} from 'rxjs/operators';

@Component({
  selector: 'ays-transaction-listener',
  template: `
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

      const sub = fromPromise(this._wavesApi.API.Node.transactions.get(transactionId))
        .pipe(
          retry(10),
          tap(res => console.log(res)),
          delay(1000)
        )
        .subscribe(() => console.log('hue'));

    }
  }

}
