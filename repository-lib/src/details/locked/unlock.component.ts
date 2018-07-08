import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {ScrRepository} from '../../core/repository.model';
import {ScrRepositoryPrivateKeyStore} from '../../store/private-keys.store';

@Component({
  selector: '',
  template: `
    <div class="mat-body-1">
      <p>Enter your private key to temporary unlock editing of repository.</p>
    </div>
    <div>
      <mat-form-field>
        <input matInput="" 
               [formControl]="privateKeyField"
               placeholder="Private key for repository">
      </mat-form-field>
    </div>
    <div fxLayout="row" 
         fxLayoutGap="24px">
      <div fxFlex="100px">
        <button mat-button="" 
                color="accent"
                (click)="abort()">
          <span>Cancel</span>
        </button>
      </div>
      <div fxFlex="100px">
        <button mat-raised-button=""
                color="accent"
                (click)="unlock()">
          <span>Unlock</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field, mat-form-field input {width: 100%;}
  `]
})
export class ScrRepositoryUnlockComponent implements OnInit {

  public privateKeyField: FormControl = new FormControl();

  private _repository: ScrRepository;
  private _privateKey: string;

  constructor(
    private _dialogRef: MatDialogRef<ScrRepositoryUnlockComponent>,
    @Inject(MAT_DIALOG_DATA) _data: any
  ) {
    this._repository = _data.repository;
  }

  ngOnInit(): void {
    this.privateKeyField.valueChanges.subscribe(privateKey => this._privateKey = privateKey);
  }

  public unlock() {
    ScrRepositoryPrivateKeyStore.add(this._repository.id, this._privateKey);
    this._repository.privateKey = this._privateKey;

    this._dialogRef.close(this._privateKey);
  }

  public abort() {
    this._dialogRef.close(null);
  }
}
