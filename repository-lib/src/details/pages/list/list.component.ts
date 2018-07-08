import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepository} from '../../../core/repository.model';
import {ScrRepositoryService} from '../../../core/repository.service';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: 'scr-repository-page-list',
  template: `
    <div>
      <ng-container *ngFor="let page of pages">
        <div>
          <a mat-raised-button="" 
             color="accent" 
             [routerLink]="['/repositories', repository.id, 'pages', 'keys', page.key]">
            <span>{{ page.key.toUpperCase() }}</span>
          </a>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageListComponent implements OnInit {

  @Input() repository: ScrRepository;
  @Input() pages: ScrRepositoryPage[];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.pages);
  }


}