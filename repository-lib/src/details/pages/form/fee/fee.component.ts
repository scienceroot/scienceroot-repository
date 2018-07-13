import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'scr-repository-page-fee-estimate',
  template: `
    <span class="mat-caption">Estimated fee for storing: {{fee | number:'1.0-0'}}</span>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageFeeEstimateComponent implements OnChanges {

  @Input() byteSize: number;

  public fee: number;

  constructor() {

  }

  ngOnChanges(changes: any): void {
    if (!!changes.byteSize) {
      const kb = this.byteSize / 1024;
      let fee = 100000 * kb;

      if (fee < 100000) {
        fee = 100000;
      }

      this.fee = fee;
    }
  }

}
