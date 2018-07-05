import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ScrRepositoryStore} from '../store/repositroy-store';
import {ScrRepository} from './repository.model';

@Injectable()
export class ScrRepositoryService {

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  public create(repository: ScrRepository) {
    const url = ScrRepositoryStore.base();

    return this._httpClient.post(url, repository)
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
}
