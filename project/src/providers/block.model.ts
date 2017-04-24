import { EntryModel } from './entry.model';

export class BlockModel {
  _id: string;
  title: string;
  slug: string;
  data: Array<any>;

  constructor(
    _id?: string,
    title?: string,
    slug?: string,
    data?: Array<any>
  ) {
    this._id = _id;
    this.title = title;
    this.slug = slug;
    this.data = data || [new EntryModel()];
  }
}
