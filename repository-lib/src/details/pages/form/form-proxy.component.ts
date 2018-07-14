import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: 'scr-repository-page-form-proxy',
  template: `
    <ng-container [ngSwitch]="page.type">
      <ng-container *ngSwitchDefault="">
        <scr-repository-page-form-raw-new [page]="page"
                                          (pageChange)="pageChange.emit($event)">
        </scr-repository-page-form-raw-new>
      </ng-container>
    </ng-container>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageFormProxyComponent implements OnInit {

  @Input() page: ScrRepositoryPage = new ScrRepositoryPage();
  @Input() pageType: 'raw' | 'markdown';

  @Output() pageChange: EventEmitter<ScrRepositoryPage> = new EventEmitter<ScrRepositoryPage>();

  constructor() {

  }

  ngOnInit(): void {

  }
}
