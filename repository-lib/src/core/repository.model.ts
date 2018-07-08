import {ScrUser} from '@scienceroot/user';
import {ScrRepositoryPrivateKeyStore} from '../store/private-keys.store';

export class ScrRepository {

  public static fromObjArr(objArr: any[]): ScrRepository[] {
    return objArr.map(ScrRepository.fromObj);
  }

  public static fromObj(obj: any): ScrRepository {
    const creator = ScrUser.fromObj(obj.creator);

    return new ScrRepository(
      obj.id,
      obj.name,
      obj.privateKey,
      obj.publicKey,
      creator
    );
  }

  public locked: boolean;

  constructor(
    public id?: string,
    public name?: string,
    public _privateKey?: string,
    public publicKey?: string,
    public creator?: ScrUser
  ) {
    this.locked = this._isLocked();
  }

  set privateKey(value: string) {
    this._privateKey = value;
    this.locked = false;
  }

  private _isLocked() {
    let locked = false;

    if (!!this.id) {
      locked = !ScrRepositoryPrivateKeyStore.get(this.id);
    }

    return locked;
  }
}
