import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ScrRepositoryRoutesModule, ScrRepositoryStoreConfig} from '@scienceroot/repository';
import {
  ScrAuthenticationLoginComponent,
  ScrAuthenticationModule,
  ScrAuthenticationStoreConfig,
  ScrSecureHttpClientModule
} from '@scienceroot/security';
import {ScrActiveUserModule, ScrUserStoreConfigModel} from '@scienceroot/user';
import {ScrWalletStoreConfig} from '@scienceroot/wallet';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'repositories'},
      {path: 'login', component: ScrAuthenticationLoginComponent}
    ]),
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrActiveUserModule,
    ScrRepositoryRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    const host: string = 'https://api.scienceroots.com';

    new ScrRepositoryStoreConfig(`${host}/repositories/`).save();

    new ScrUserStoreConfigModel(
      `${host}/users`,
      `${host}/register`,
      `${host}/industries/`,
      `${host}/interests/`,
      `${host}/search/languages/`
    ).save();

    new ScrAuthenticationStoreConfig(
      `${host}`,
      'scrAuthToken'
    ).save();

    new ScrWalletStoreConfig(
      `${host}/users`,
      'publickey'
    ).save();
  }
}
