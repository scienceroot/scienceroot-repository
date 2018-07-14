import {Component, Input, OnInit} from '@angular/core';
import * as showdown from 'showdown';
import {ScrRepositoryPage} from '../../page.model';

@Component({
  selector: 'scr-repository-page-detail-markdown',
  template: `
    <p [innerHtml]="preview">
    </p>
  `,
  styles: [`

  `]
})
export class ScrRepositoryPageDetailMarkdownComponent implements OnInit {

  @Input() page: ScrRepositoryPage;

  public preview: string;

  private _previewConverter: showdown.Converter = new showdown.Converter();

  constructor() {

  }

  ngOnInit(): void {
    this.preview = this._previewConverter.makeHtml(this.page.text);
  }
}
