import {ScrUser} from '@scienceroot/user';

export class ScrRepository {

  public static fromObj(obj: any): ScrRepository {
    const creator = ScrUser.fromObj(obj.creator);

    return new ScrRepository(
      obj.name,
      obj.privateKey,
      obj.publicKey,
      creator
    );
  }

  constructor(
    public name?: string,
    public privateKey?: string,
    public publicKey?: string,
    public creator?: ScrUser
  ) {

  }
}
