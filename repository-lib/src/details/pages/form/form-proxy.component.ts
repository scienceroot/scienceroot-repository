import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: 'scr-repository-page-form-proxy',
  template: `
    <ng-container [ngSwitch]="page.type">
      <ng-container *ngSwitchCase="'markdown'">
        <scr-repository-page-form-markdown  [page]="page"
                                            (pageChange)="pageChange.emit($event)">
        </scr-repository-page-form-markdown>
      </ng-container>
      <ng-container *ngSwitchDefault="">
        <scr-repository-page-form-raw [page]="page"
                                      (pageChange)="pageChange.emit($event)">
        </scr-repository-page-form-raw>
      </ng-container>
    </ng-container>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageFormProxyComponent implements OnInit {

  @Input() page: ScrRepositoryPage;

  @Output() pageChange: EventEmitter<ScrRepositoryPage> = new EventEmitter<ScrRepositoryPage>();

  constructor() {

  }

  ngOnInit(): void {

  }
}
