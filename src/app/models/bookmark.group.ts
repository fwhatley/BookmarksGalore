import {Bookmark} from './bookmark';

export class BookmarkGroup {
  public title: string;
  public bookmarks: Bookmark[];

  constructor(values: any = {}) {
    this.title = values.title || '';
    this.bookmarks = (values.bookmarks || []).map( (obj) => new Bookmark(obj) );
  }
}
