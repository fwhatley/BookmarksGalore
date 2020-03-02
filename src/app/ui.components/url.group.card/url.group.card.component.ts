import {Component, Input, OnInit} from '@angular/core';
import {BookmarkGroup} from '../../models/bookmark.group';

@Component({
  selector: 'app-urlgroupcard',
  templateUrl: './url.group.card.component.html',
  styleUrls: ['./url.group.card.component.sass']
})
export class UrlGroupCardComponent implements OnInit {

  @Input() public bookmarkGroup: BookmarkGroup;

  constructor() { }

  ngOnInit(): void {
    this.bookmarkGroup = this.bookmarkGroup || undefined;
  }

}
