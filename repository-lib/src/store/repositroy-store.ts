import {ScrRepositoryStoreConfig} from './repositroy-store-config.model';

export class ScrRepositoryStore {

  public static base(): string {
    const config = ScrRepositoryStoreConfig.fetch();

    return config.base;
  }

  public static byRepositoryId(repositoryId: string): string {
    const config = ScrRepositoryStoreConfig.fetch();

    return `${config.base}${repositoryId}`;
  }
}
