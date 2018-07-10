import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {ScrRepositoryStore} from '../store/repositroy-store';
import {ScrRepository} from './repository.model';

@Injectable()
export class ScrRepositoryService {

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  public create(repository: ScrRepository): Promise<ScrRepository> {
    const url = ScrRepositoryStore.base();

    return this._httpClient.post(url, repository)
      .pipe(
        tap(res => console.log(res)),
        map(ScrRepository.fromObj)
      )
      .toPromise();
  }

  public byUser(userId: string): Promise<ScrRepository[]> {
    const url = ScrRepositoryStore.base();
    let params = new HttpParams();

    params = params.set('userId', userId);

    return this._httpClient.get(url, {params: params})
      .pipe(
        map(ScrRepository.fromObjArr)
      )
      .toPromise();
  }

  public get(repositoryId: string) {
    const url = ScrRepositoryStore.byRepositoryId(repositoryId);

    return this._httpClient.get(url)
      .pipe(
        map(ScrRepository.fromObj)
      )
      .toPromise();
  }

  public addPage(repositoryId: string, dataRequest: any): Promise<any> {
    const url = ScrRepositoryStore.byRepositoryId(repositoryId);

    return this._httpClient.post(url, dataRequest)
      .pipe(
        tap(res => console.log(res))
      )
      .toPromise();
  }
}
