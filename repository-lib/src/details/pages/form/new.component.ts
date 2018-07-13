import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrRepositoryDataService} from '../../../core/data.service';
import {ScrRepositoryService} from '../../../core/repository.service';
import {ScrRepositoryPrivateKeyStore} from '../../../store/private-keys.store';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <ays-transaction-listener [transactionId]="saveTransactionId">
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

  public saveTransactionId: string;

  public readonly repositoryId: string;
  private readonly _privateKey: string;

  constructor(
    private _repositoryService: ScrRepositoryService,
    private _dataService: ScrRepositoryDataService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.repositoryId = this._activatedRoute.snapshot.params.repositoryId;
    this._privateKey = ScrRepositoryPrivateKeyStore.get(this.repositoryId);
  }

  ngOnInit(): void {

  }

  public save() {
    this._dataService.save(this.repositoryId, this.page.toDataRequest(this._privateKey))
      .then(txId => this.saveTransactionId = txId);
  }

  public onPageChange(newPage: ScrRepositoryPage) {
    this.page = newPage;
  }
}
