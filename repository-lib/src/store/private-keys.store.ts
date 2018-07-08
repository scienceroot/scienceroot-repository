export class ScrRepositoryPrivateKeyStore {

  private static _store: Storage = sessionStorage;

  public static add(repositoryId: string, privateKey: string) {
    const storageKey = this._getStorageKey(repositoryId);

    this._store.setItem(storageKey, privateKey);
  }

  public static get(repositoryId: string): string | null {
    const storageKey = this._getStorageKey(repositoryId);

    return this._store.getItem(storageKey);
  }

  private static _getStorageKey(repositoryId: string) {
    return `scr.keys.repository.${repositoryId}`;
  }
}
