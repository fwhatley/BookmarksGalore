import {BookmarkGroup} from './bookmark.group';

export class Page {
  public creatorUserId: string;
  public description: string;
  public isPrivate: boolean;
  public title: string;
  public bookmarkGroups: BookmarkGroup[];

  constructor(values: any = {}) {
    this.creatorUserId = values.creatorUserId || '';
    this.description = values.description || '';
    this.isPrivate = values.isprivate || true;
    this.title = values.title || '';
    this.bookmarkGroups = (values.bookmarkgroups || []).map( (obj) => new BookmarkGroup(obj) );
  }
}
