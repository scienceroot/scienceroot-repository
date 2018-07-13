import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepositoryPrivateKeyStore} from '../../../store/private-keys.store';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <scr-loading [waitFor]="pageReq">
      <div onFinish>
        <ng-container *ngIf="!!page">
          <div>
            <span class="mat-title">Edit page</span>
          </div>
          <ng-container *ngIf="!!error">
            <span class="mat-error">{{error}}</span>
          </ng-container>
          <ays-transaction-listener [transactionId]="saveTransactionId" 
                                    (transactionSuccess)="onTransactionSuccess($event)">
          </ays-transaction-listener>
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
  public repositoryId: string;
  public error: string = null;
  public saveTransactionId: string;

  private _privateKey: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
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
    this._dataService.update(this.repositoryId, this.page.toDataRequest(this._privateKey))
      .then(txId => {
        this.saveTransactionId = txId;
        this.error = null;
      })
      .catch((error: any) => {
        const errorData = JSON.parse(error.error);

        if (errorData.status === 400) {
          this.error = errorData.message;
        } else {
          this.error = 'An unknown error occured.';
        }
      });
  }

  public onTransactionSuccess(tx: any) {
    this._router.navigate(['/repositories', this.repositoryId, 'pages', 'keys', this.page.key]);
  }

  private _onParamsChange(params: any) {
    const key = params.key;

    this.repositoryId = params.repositoryId;
    this._privateKey = ScrRepositoryPrivateKeyStore.get(this.repositoryId);

    this.pageReq = this._dataService.getPageByRepository(this.repositoryId, key);
    this.pageReq.then(page => {
      this.page = page;
      this.error = null;
    });
  }
}
