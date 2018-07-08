import {Component, Input, OnInit} from '@angular/core';
import {ScrRepository} from '../../core/repository.model';

@Component({
  selector: 'scr-repository-pages',
  template: `
    <div fxLayout="row" 
         fxLayoutAlign="end">
      <div fxFlex="100px">
        <a  mat-raised-button=""
            [routerLink]="['/repositories', repository.id, 'pages', 'new']">
          <span>New page</span>
        </a>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPagesComponent implements OnInit {

  @Input() repository: ScrRepository;

  constructor() {

  }

  ngOnInit(): void {

  }
}
