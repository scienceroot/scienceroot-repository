export class ScrRepositoryStoreConfig {

  public static readonly storageKeys: any = {
    base: 'scr.repository.base',
  };

  public static fetch(): ScrRepositoryStoreConfig {
    let base = sessionStorage.getItem(ScrRepositoryStoreConfig.storageKeys.base) || '';

    return new ScrRepositoryStoreConfig(base);
  }

  constructor(
    public base: string,
  ) {

  }

  public save() {
    for (const key in ScrRepositoryStoreConfig.storageKeys) {
      if (ScrRepositoryStoreConfig.storageKeys.hasOwnProperty(key)) {
        sessionStorage.setItem(
          ScrRepositoryStoreConfig.storageKeys[key],
          this[key]
        );
      }
    }
  }
}
