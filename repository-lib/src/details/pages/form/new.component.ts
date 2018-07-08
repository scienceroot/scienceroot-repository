import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepositoryService} from '../../../core/repository.service';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <scr-repository-page-form [page]="page"
                             (pageChange)="onPageChange($event)">
    </scr-repository-page-form>
    <div fxLayout="row" 
         fxLayoutAlign="end">
      <div fxFlex="100px">
        <a mat-button="" 
           color="accent"
           [routerLink]="['/repositories', repositoryId]">
          <span>Cancel</span>
        </a>
      </div>
      <div fxFlex="100px">
        <button mat-raised-button=""
                (click)="save()"
                color="accent">
          <span>Save</span>
        </button>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPagesNewComponent implements OnInit {

  public page: ScrRepositoryPage = new ScrRepositoryPage();

  public readonly repositoryId: string;
  private _privateKey: string = '4HcPdaVysXhwvk5BwVfhaKzmgR8eQDkyPktRqFctpiSh'; // Cool project

  constructor(
    private _repositoryService: ScrRepositoryService,
    private _dataService: ScrRepositoryDataService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.repositoryId = this._activatedRoute.snapshot.params.repositoryId;

  }

  ngOnInit(): void {

  }

  public save() {
    this._dataService.save(this.repositoryId, this.page.toDataRequest(this._privateKey));
  }

  public onPageChange(newPage: ScrRepositoryPage) {
    this.page = newPage;
  }
}
