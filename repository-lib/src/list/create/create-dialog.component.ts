import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {ScrActiveUserService} from '@scienceroot/user';
import {ScrRepository} from '../../core/repository.model';

@Component({
  selector: '',
  template: `
    <div fxLayout="row" 
         fxLayoutGap="24px">
      <div fxFlex="" 
           fxFlexAlign="center">
        <ng-container *ngIf="!isSaved">
          <span class="mat-title">Create new repository</span>
        </ng-container>
      </div>
      <div fxFlex="24px" 
           fxFlexAlign="center">
        <button mat-icon-button=""
                (click)="abort()">
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </div>
    <div>
      <ng-container *ngIf="!isSaved">
        <scr-repository-form-new [repository]="repository"
                                 (repositorySaved)="onRepositorySaved($event)">
        </scr-repository-form-new>
      </ng-container>
      <ng-container *ngIf="isSaved">
        <div>
          <span class="mat-title">{{repository.name}}</span>
        </div>
        <div fxLayout="row" 
             fxLayoutGap="24px">
          <div fxFlex="50px">
            <span class="mat-caption">Public key</span>
          </div>
          <div fxFlex="">
            <span class="mat-body-1">{{repository.publicKey}}</span>
          </div>
        </div>
        <div fxLayout="row"
             fxLayoutGap="24px">
          <div fxFlex="50px">
            <span class="mat-caption">Private key</span>
          </div>
          <div fxFlex="">
            <span class="mat-body-1">{{repository.privateKey}}</span>
          </div>
        </div>
        <div fxLayout="row" 
             fxLayoutAlign="end">
          <div fxFlex="150px">
            <button  mat-raised-button="" 
                     color="accent"
                     (click)="navigateToRepository()">
              <span>Show new repository</span>
            </button>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`

  `]
})
export class ScrRepositoryListCreateDialogComponent implements OnInit {

  public repository: ScrRepository = new ScrRepository();
  public isSaved: boolean = false;

  constructor(
    private _dialogRef: MatDialogRef<ScrRepositoryListCreateDialogComponent>,
    private _router: Router,
    private _activeUserService: ScrActiveUserService
  ) {
    this.repository.creator = this._activeUserService.get();
  }

  ngOnInit(): void {

  }

  public onRepositorySaved(savedRepository: ScrRepository) {
    this.repository = savedRepository;
    this.isSaved = true;
  }

  public navigateToRepository() {
    this._router.navigate(['/repositories', this.repository.id])
      .then(() => this._dialogRef.close());
  }

  public abort() {
    this._dialogRef.close(null);
  }
}
