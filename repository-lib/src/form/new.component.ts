import {Component, Input, OnInit} from '@angular/core';
import {ScrRepository} from '../core/repository.model';
import {ScrRepositoryService} from '../core/repository.service';

@Component({
  selector: 'scr-repository-form-new',
  template: `
    <div>
      <mat-form-field>
        <input  matInput=""
                [(ngModel)]="repository.name"
                placeholder="Name">
      </mat-form-field>
    </div>
    <div  fxLayout="row"
          fxLayoutAlign="end">
      <div fxFlex="88px">
        <button mat-raised-button=""
                color="accent"
                (click)="save()">
          <span>Save</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field, input {width: 100%;}
  `]
})
export class ScrRepositoryFormNewComponent implements OnInit {

  @Input() repository: ScrRepository;

  constructor(private _repositoryService: ScrRepositoryService) {

  }

  ngOnInit(): void {
    this.repository = this.repository || new ScrRepository();
  }

  public save() {
    console.log(this.repository)

    this._repositoryService.create(this.repository)
      .then(res => console.log(res));
  }
}
