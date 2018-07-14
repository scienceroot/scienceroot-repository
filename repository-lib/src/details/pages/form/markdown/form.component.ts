import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {ScrRepositoryPage} from '../../page.model';
import * as showdown from 'showdown';

@Component({
  selector: 'scr-repository-page-form-markdown',
  template: `
    <div>
      <div fxLayout="row" 
           fxLayoutAlign="end">
        <div fxFlex="150px">
          <mat-button-toggle-group  #group="matButtonToggleGroup"
                                    (valueChange)="onViewStateChange($event)">
            <mat-button-toggle  [checked]="viewState === 'edit'"
                                value="edit">
              <span>Edit</span>
            </mat-button-toggle>
            <mat-button-toggle [checked]="viewState === 'preview'" 
                               value="preview">
              <span>Preview</span>
            </mat-button-toggle>
          </mat-button-toggle-group>
        </div>
      </div>
      <div>
        <div>
          <ng-container *ngIf="viewState === 'edit'">
            <div>
              <mat-form-field>
                <input matInput=""
                       [formControl]="titleFormControl"
                       placeholder="Title"/>
              </mat-form-field>
            </div>
            <div class="text-container">
              <mat-form-field>
                <textarea matInput=""
                  [formControl]="dataFormControl"
                  placeholder="Your data"></textarea>
              </mat-form-field>
            </div>
          </ng-container>
          <ng-container *ngIf="viewState === 'preview'">
            <div>
              <span class="mat-title">{{page.title}}</span>
            </div>
            <div>
              <p [innerHtml]="preview"></p>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
    <div class="mat-caption">
      <scr-repository-page-fee-estimate [byteSize]="page.data.length">
      </scr-repository-page-fee-estimate>
      <span> ({{page.data.length}} Bytes)</span>
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
export class ScrRepositoryPageFormMarkdownComponent implements OnInit {

  @Input() page: ScrRepositoryPage;

  @Output() pageChange: EventEmitter<ScrRepositoryPage> = new EventEmitter<ScrRepositoryPage>();

  public titleFormControl: FormControl = new FormControl();
  public dataFormControl: FormControl = new FormControl();
  public viewState: 'edit' | 'preview' = 'edit';

  public preview: any;

  private _previewConverter: showdown.Converter = new showdown.Converter();

  constructor() {

  }

  ngOnInit(): void {
    this._initTextInput();
    this._initTitleInput();
  }

  public onViewStateChange(newViewState: 'edit' | 'preview') {
    if (newViewState === 'preview') {
      this.preview = this._previewConverter.makeHtml(this.page.text);
    }

    this.viewState = newViewState;
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
