import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: 'scr-repository-page-form',
  template: `
    <div>
      <mat-form-field>
        <input matInput=""
               [formControl]="titleFormControl"
               placeholder="Title" />
      </mat-form-field>
    </div>
    <div class="text-container">
      <mat-form-field>
        <textarea matInput=""
                  [formControl]="dataFormControl"
                  placeholder="Your data"></textarea>
      </mat-form-field>
    </div>
    <div class="mat-caption">
      <scr-repository-page-fee-estimate [byteSize]="page.data.length">
      </scr-repository-page-fee-estimate>
      <span class="mat-caption"> ({{page.data.length}} Bytes)</span>
    </div>
  `,
  styles: [`
    .text-container {
      height: 400px;
      width: 100%;
    }

    mat-form-field textarea {
      height: 370px;
    }

    mat-form-field,
    mat-form-field input {
      width: 100%;
    } 
  `]
})
export class ScrRepositoryPageFormComponent implements OnInit {

  @Input() page: ScrRepositoryPage = new ScrRepositoryPage();

  @Output() pageChange: EventEmitter<ScrRepositoryPage> = new EventEmitter<ScrRepositoryPage>();

  public titleFormControl: FormControl = new FormControl();
  public dataFormControl: FormControl = new FormControl();

  constructor() {

  }

  ngOnInit(): void {
    this._initTextInput();
    this._initTitleInput();
  }

  private _initTitleInput() {
    this.titleFormControl.setValue(this.page.title);
    this.titleFormControl.valueChanges
      .pipe(
        debounceTime(500),
      )
      .subscribe(text => {
        this.page.title = text;
        this.pageChange.emit(this.page);
      });
  }

  private _initTextInput() {
    this.dataFormControl.setValue(this.page.text);
    this.dataFormControl.valueChanges
      .pipe(
        debounceTime(500),
      )
      .subscribe(text => {
        this.page.text = text;
        this.pageChange.emit(this.page);
      });
  }
}
