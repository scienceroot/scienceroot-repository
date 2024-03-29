import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepositoryService} from '../../../core/repository.service';
import {ScrRepositoryPrivateKeyStore} from '../../../store/private-keys.store';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <div>
      <span class="mat-title">Create new page</span>
    </div>
    <ng-container *ngIf="!!error">
      <span class="mat-error">{{error}}</span>
    </ng-container>
      <ays-transaction-listener [transactionId]="saveTransactionId"
                                (transactionSuccess)="onTransactionSuccess($event)">
      </ays-transaction-listener>
    <ng-container  *ngIf="!saveTransactionId">
      <scr-repository-page-form-proxy [page]="page"
                                      (pageChange)="onPageChange($event)">
      </scr-repository-page-form-proxy>
    </ng-container>
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

  public page: ScrRepositoryPage;
  public error: string = null;

  public saveTransactionId: string;

  public readonly repositoryId: string;
  private readonly _privateKey: string;

  constructor(
    private _router: Router,
    private _repositoryService: ScrRepositoryService,
    private _dataService: ScrRepositoryDataService,
    private _activatedRoute: ActivatedRoute
  ) {
    const pageType = this._activatedRoute.snapshot.params.pageType;

    this.repositoryId = this._activatedRoute.snapshot.params.repositoryId;
    this.page = new ScrRepositoryPage('', '', pageType);
    this._privateKey = ScrRepositoryPrivateKeyStore.get(this.repositoryId);
  }

  ngOnInit(): void {

  }

  public save() {
    this._dataService.save(this.repositoryId, this.page.toDataRequest(this._privateKey))
      .then(txId => {
        if (!txId) {
          // Workaround until error handling of backend is fixed
          const error = new Error();
          (error as any).error =
            '{ "message": "Something went wrong. Check the size of your content and your repositories balance.", "status": 400}';

          throw error;
        } else {
          this.saveTransactionId = txId;
          this.error = null;
        }
      })
      .catch((error: any) => {
        console.log(error)
        const errorData = JSON.parse(error.error);

        if (errorData.status === 400) {
          this.error = errorData.message;
        } else {
          this.error = 'An unknown error occured.';
        }
      });
  }

  public onTransactionSuccess(tx: any) {
    const key = tx.data[0].key;
    this._router.navigate(['/repositories', this.repositoryId, 'pages', 'keys', key]);
  }

  public onPageChange(newPage: ScrRepositoryPage) {
    this.page = newPage;
  }
}
