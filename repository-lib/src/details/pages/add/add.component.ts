import {Component, Input, OnInit} from '@angular/core';
import {ScrRepository} from '../../../core/repository.model';

@Component({
  selector: 'scr-repository-page-add',
  template: `
    <button mat-icon-button="" 
            color="accent"
            [matMenuTriggerFor]="menu">
      <mat-icon>add</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <a mat-menu-item=""
         [routerLink]="['/repositories', repository.id, 'pages', 'new', 'raw']">
        <span>Raw text</span>
      </a>
      <a mat-menu-item=""
         [routerLink]="['/repositories', repository.id, 'pages', 'new', 'markdown']">
        <span>Markdown</span>
      </a>
    </mat-menu>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageAddComponent implements OnInit {

  @Input() repository: ScrRepository;

  constructor() {

  }

  ngOnInit(): void {

  }
}
