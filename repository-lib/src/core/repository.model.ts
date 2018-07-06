import {ScrUser} from '@scienceroot/user';

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

  constructor(
    public id?: string,
    public name?: string,
    public privateKey?: string,
    public publicKey?: string,
    public creator?: ScrUser
  ) {

  }
}
