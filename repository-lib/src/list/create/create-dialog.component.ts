import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ScrActiveUserService, ScrUser} from '@scienceroot/user';
import {ScrRepository} from '../../core/repository.model';

@Component({
  selector: '',
  template: `
    <div fxLayout="row" 
         fxLayoutGap="24px">
      <div fxFlex="" 
           fxFlexAlign="center">
        <span class="mat-title">Create new repository</span>
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
      <scr-repository-form-new [repository]="repository">
      </scr-repository-form-new>
    </div>
  `,
  styles: [`

  `]
})
export class ScrRepositoryListCreateDialogComponent implements OnInit {

  public repository: ScrRepository = new ScrRepository();

  constructor(
    private _dialogRef: MatDialogRef<ScrRepositoryListCreateDialogComponent>,
    private _activeUserService: ScrActiveUserService
  ) {
    this.repository.creator = this._activeUserService.get();
    console.log(this._activeUserService.get())
  }

  ngOnInit(): void {

  }

  public abort() {
    this._dialogRef.close(null);
  }
}
