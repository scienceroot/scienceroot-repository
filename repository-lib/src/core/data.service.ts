import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ScrWavesApiService} from '@scienceroot/wallet';
import {IWavesAPI} from '@waves/waves-api';
import {Observable} from 'rxjs/Observable';
import {filter, map, tap} from 'rxjs/operators';
import {DataEntry, ScrRepositoryPage} from '../details/pages/page.model';
import {ScrRepositoryStore} from '../store/repositroy-store';
import {ScrRepositoryService} from './repository.service';

export const SCR_WAVES_URL = 'https://scienceblock.org';

@Injectable()
export class ScrRepositoryDataService {

  private _wavesApi: IWavesAPI;

  constructor(
    private _wavesApiProvider: ScrWavesApiService,
    private _repositoryService: ScrRepositoryService,
    private _httpClient: HttpClient
  ) {
    this._wavesApi = this._wavesApiProvider.wavesApi;
  }

  public save(repositoryId: string, dataRequest: any): Promise<any> {
    const url = ScrRepositoryStore.byRepositoryId(repositoryId);

    return this._httpClient.post(url, dataRequest)
      .pipe(
        tap(res => console.log(res))
      )
      .toPromise();
  }

  public getPages(address: string): Promise<ScrRepositoryPage[]> {
    return this.get(address)
      .pipe(
        map(res => res.filter(entry => entry.key.indexOf(ScrRepositoryPage.dataKey) > -1)),
        map(ScrRepositoryPage.fromDataEntries)
      )
      .toPromise();
  }

  public getPageByRepository(repositoryId: string, key: string): Promise<ScrRepositoryPage> {
    return this._repositoryService.get(repositoryId)
      .then(repository => {
        const address = this._wavesApi.tools.getAddressFromPublicKey(repository.publicKey);

        return this.getPage(address, key);
      });
  }

  public getPage(address: string, key: string): Promise<ScrRepositoryPage> {
    return this.get(address)
      .pipe(
        map(res => res.filter(entry => entry.key.indexOf(key) > -1)),
        map(res => {
          let result = null;

          if (!!res && res.length > 0) {
            result = ScrRepositoryPage.fromDataEntry(res[0]);
          }

          return result;
        })
      )
      .toPromise();
  }

  public get(address: string): Observable<DataEntry[]> {
    const url = SCR_WAVES_URL + '/addresses/data/' + address;

    return this._httpClient.get<DataEntry[]>(url);
  }
}
