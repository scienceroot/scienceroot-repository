import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrRepository} from '../core/repository.model';
import {ScrRepositoryService} from '../core/repository.service';

@Component({
  selector: 'scr-repository-form-new',
  template: `
    <scr-loading [waitFor]="repositoryReq">
      <div onInit>
        <mat-form-field>
          <input  matInput=""
                  [(ngModel)]="repository.name"
                  placeholder="Name">
        </mat-form-field>
      </div>
    </scr-loading>
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

  @Output() repositorySaved: EventEmitter<ScrRepository> = new EventEmitter<ScrRepository>();

  public repositoryReq: Promise<ScrRepository>;

  constructor(private _repositoryService: ScrRepositoryService) {

  }

  ngOnInit(): void {
    this.repository = this.repository || new ScrRepository();
  }

  public save() {
    this.repositoryReq = this._repositoryService.create(this.repository);
    this.repositoryReq.then(res => this.repositorySaved.emit(res));
  }
}
