import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: 'scr-repository-pages-form',
  template: `
    <div class="text-container">
      <mat-form-field>
        <textarea matInput=""
                  [formControl]="dataFormControl"
                  placeholder="Your data"></textarea>
      </mat-form-field>
    </div>
    <div class="mat-caption">
      <span>Current size:</span>
      <span>{{page.data.length}} Bytes</span>
    </div>
  `,
  styles: [`
    .text-container {
      height: 400px;
      width: 100%;
    }

    .text-container mat-form-field, .text-container mat-form-field textarea {
      width: 100%;
      height: 370px;
    } 
  `]
})
export class ScrRepositoryPagesFormComponent implements OnInit {

  @Input() page: ScrRepositoryPage = new ScrRepositoryPage();

  @Output() pageChange: EventEmitter<ScrRepositoryPage> = new EventEmitter<ScrRepositoryPage>();

  public dataFormControl: FormControl = new FormControl();

  constructor() {
    this.dataFormControl.valueChanges
      .pipe(
        debounceTime(500),
      )
      .subscribe(text => {
        this.page.text = text;
        this.pageChange.emit(this.page);
      });
  }

  ngOnInit(): void {

  }
}
