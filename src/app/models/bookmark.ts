export class Bookmark {
  public name: string;
  public url: string;

  constructor(values: any = {}) {
    this.name = values.name || '';
    this.url = values.url || '';
  }
}
