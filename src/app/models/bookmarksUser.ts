export class BookmarksUser {
  public defaultPageId: string;
  public name: boolean;
  public userId: boolean;

  constructor(values: any = {}) {
    this.defaultPageId = values.defaultpageid || '';
    this.name = values.name || '';
    this.userId = values.userid || '';
  }
}
