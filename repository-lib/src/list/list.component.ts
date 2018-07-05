import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'scr-repository-list',
  template: `
    <div class="actions">
      <div  fxLayout="row"
            fxLayoutAlign="end">
        <div fxFlex="130px">
          <scr-repository-list-create>
          </scr-repository-list-create>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .actions {
      margin: 24px;
    }
  `]
})
export class ScrRepositoryListComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }
}
