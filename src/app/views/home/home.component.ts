import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {BookmarksUser} from '../../models/bookmarksUser';
import {Page} from '../../models/page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public page: Page;
  public bookmarksUser: BookmarksUser;
  public constructor(private firebaseService: FirebaseService) { }

  public ngOnInit(): void {

    this.firebaseService.getUser("fwhatley").subscribe(
      (res) =>
      {
        console.log(res);
        this.bookmarksUser = res;

        // get the pages for the user
        this.firebaseService.getPages(res.defaultPageId).subscribe(
          (res) =>
          {
            this.page = res;
            console.log(this.page);

          },
          (err) =>
          {
            console.log(err);
          }
        );

      },
      (err) =>
      {
        console.log(err);
      }
    );




  }

}
