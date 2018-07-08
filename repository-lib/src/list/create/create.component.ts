import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ScrRepositoryListCreateDialogComponent} from './create-dialog.component';

@Component({
  selector: 'scr-repository-list-create',
  template: `
    <button mat-raised-button=""
            color="accent"
            (click)="openCreateDialog()">
      <span>New repository</span>
    </button>
  `,
  styles: [`
    
  `]
})
export class ScrRepositoryListCreateComponent implements OnInit, AfterViewInit {

  private _dialogRef: MatDialogRef<ScrRepositoryListCreateDialogComponent>;

  constructor(private _dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.openCreateDialog();
  }

  ngAfterViewInit(): void {

  }

  public openCreateDialog() {
    this._dialogRef = this._dialog.open(ScrRepositoryListCreateDialogComponent);
    this._dialogRef.afterClosed()
      .subscribe(res => console.log(res));
  }
}
