import { Guid } from "js-guid";

export default class SprocketStateModel {
  private _id: Guid;
  private _count: number;

  public constructor(id: string, count: number) {
    this._id = new Guid(Guid.parse(id));
    this._count = count;
  }

  public get id(): Guid {
    return this._id;
  }

  public updateCount(newCount: number): SprocketStateModel {
    return new SprocketStateModel(this.id.toString(), newCount);
  }
}
