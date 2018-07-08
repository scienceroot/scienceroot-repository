import {Component, OnInit} from '@angular/core';
import {t} from '@angular/core/src/render3';
import {ActivatedRoute} from '@angular/router';
import {ScrRepository} from '../../../core/repository.model';
import {ScrRepositoryService} from '../../../core/repository.service';
import {ScrRepositoryPage} from '../page.model';

@Component({
  selector: '',
  template: `
    <scr-repository-pages-form [page]="page"
                               (pageChange)="onPageChange($event)">
    </scr-repository-pages-form>
    <div fxLayout="row" 
         fxLayoutAlign="end">
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

  private _repositoryId: string;
  private _privateKey: string = '4HcPdaVysXhwvk5BwVfhaKzmgR8eQDkyPktRqFctpiSh'; // Cool project

  constructor(
    private _repositoryService: ScrRepositoryService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._repositoryId = this._activatedRoute.snapshot.params.repositoryId;

  }

  ngOnInit(): void {

  }

  public save() {
    this._repositoryService.addPage(this._repositoryId, this.page.toDataRequest(this._privateKey));
  }

  public onPageChange(newPage: ScrRepositoryPage) {
    this.page = newPage;
  }
}
