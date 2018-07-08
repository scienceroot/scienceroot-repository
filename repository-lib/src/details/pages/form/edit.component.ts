import {Component, OnInit} from '@angular/core';
import {s} from '@angular/core/src/render3';
import {ActivatedRoute} from '@angular/router';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <scr-loading [waitFor]="pageReq">
      <div onFinish>
        <ng-container *ngIf="!!page">
          <scr-repository-page-form [page]="page"
                                    (pageChange)="onPageChange($event)">
          </scr-repository-page-form>
          <div fxLayout="row"
               fxLayoutAlign="end">
            <div fxFlex="100px">
              <button mat-raised-button=""
                      [disabled]="!unsavedChanges"
                      (click)="save()"
                      color="accent">
                <span>Save</span>
              </button>
            </div>
          </div>
        </ng-container>
      </div>
    </scr-loading>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageFormEditComponent implements OnInit {

  public pageReq: Promise<ScrRepositoryPage>;
  public page: ScrRepositoryPage;

  public unsavedChanges: boolean = false;

  private _repositoryId: string;
  private _privateKey: string = '4HcPdaVysXhwvk5BwVfhaKzmgR8eQDkyPktRqFctpiSh'; // Cool project

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: ScrRepositoryDataService
  ) {
    this._activatedRoute.params.subscribe(params => this._onParamsChange(params));
  }

  ngOnInit(): void {

  }

  public onPageChange(newPage: ScrRepositoryPage) {
    this.page = newPage;
    this.unsavedChanges = true;
  }

  public save() {
    this._dataService.save(this._repositoryId, this.page.toDataRequest(this._privateKey));
  }

  private _onParamsChange(params: any) {
    this._repositoryId = params.repositoryId;
    const key = params.key;

    this.pageReq = this._dataService.getPageByRepository(this._repositoryId, key);
    this.pageReq.then(page => this.page = page);
  }
}
