import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'scr-repository-page-fee-estimate',
  template: `
    <ng-container *ngIf="!!warning">
      <div class="mat-error">
        <mat-icon color="error">warning</mat-icon>
        <span>{{warning}}</span>
      </div>
    </ng-container>
    <span class="mat-caption">Estimated fee for storing: {{fee | number:'1.0-0'}}</span>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageFeeEstimateComponent implements OnChanges {

  @Input() byteSize: number;

  public fee: number;
  public warning: string = null;

  private readonly _maxSize: number = 35840;

  constructor() {

  }

  ngOnChanges(changes: any): void {
    if (!!changes.byteSize) {
      this._validate(this.byteSize);
      const kb = Math.ceil(this.byteSize / 1024);
      let fee = 100000 * kb;

      if (fee < 100000) {
        fee = 100000;
      }

      this.fee = fee;
    }
  }

  private _validate(byteSize: number) {
    if (byteSize > this._maxSize) {
      this.warning = 'Content too large. Max size is 35 kB.';
    } else {
      this.warning = null;
    }
  }
}
