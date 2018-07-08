import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ScrRepository} from '../../core/repository.model';
import {ScrRepositoryPrivateKeyStore} from '../../store/private-keys.store';
import {ScrRepositoryUnlockComponent} from './unlock.component';

@Component({
  selector: 'scr-repository-locked',
  template: `
    <div>
      <ng-container *ngIf="!repository.locked">
        <mat-icon>lock_open</mat-icon>  
      </ng-container>
      <ng-container *ngIf="repository.locked">
        <button mat-icon-button="" 
                color="accent"
                (click)="openUnlockDialog()">
          <mat-icon>lock</mat-icon>
        </button>
      </ng-container>
    </div>
  `,
  styles: [`

  `]
})
export class ScrRepositoryLockedComponent {

  @Input() repository: ScrRepository;

  private _dialogRef: MatDialogRef<ScrRepositoryUnlockComponent>;

  constructor(
    private _dialog: MatDialog
  ) {

  }

  public openUnlockDialog() {
    this._dialogRef = this._dialog.open(ScrRepositoryUnlockComponent, {data: {repository: this.repository}});
  }
}
