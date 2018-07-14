import {Component, Input, OnInit} from '@angular/core';
import {ScrRepositoryPage} from '../../page.model';

@Component({
  selector: 'scr-repository-page-detail-raw',
  template: `
    <p class="mat-body-2"
       [innerHtml]="page.displayText">
    </p>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageDetailRawComponent implements OnInit {

  @Input() page: ScrRepositoryPage;

  constructor() {

  }

  ngOnInit(): void {

  }
}
