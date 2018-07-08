import {Component, Input, OnInit} from '@angular/core';
import {ScrActiveUserService} from '@scienceroot/user';
import {ScrRepository} from '../core/repository.model';
import {ScrRepositoryService} from '../core/repository.service';

@Component({
  selector: 'scr-repository-list',
  template: `
    <ng-container *ngFor="let repository of repositories">
      <div class="repository">
        <div fxLayout="row">
          <div fxFlex="">
            <span class="mat-subheading-1">{{repository.name}}</span>
          </div>
          <div fxFlex="75px">
            <a  mat-button=""
                [routerLink]="['/repositories', repository.id]"
                color="accent">
              <span>Details</span>
            </a>
          </div>
        </div>
      </div>
      <mat-divider></mat-divider>
    </ng-container>
  `,
  styles: [`
    .repository {
      margin: 12px 0;
    }
  `]
})
export class ScrRepositoryListComponent implements OnInit {

  @Input() repositories: ScrRepository[];

  constructor() {
  }

  ngOnInit(): void {

  }
}
