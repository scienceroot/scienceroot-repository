import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrRepositoryPage} from '../../page.model';

@Component({
  selector: 'scr-repository-page-form-raw-new',
  template: `
    <scr-repository-page-form-raw [page]="page"
                                  (pageChange)="pageChange.emit($event);">
    </scr-repository-page-form-raw>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageFormRawNewComponent implements OnInit {

  @Input() page: ScrRepositoryPage = new ScrRepositoryPage();

  @Output() pageChange: EventEmitter<ScrRepositoryPage> = new EventEmitter<ScrRepositoryPage>();

  constructor() {

  }

  ngOnInit(): void {

  }
}
