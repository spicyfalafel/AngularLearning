import {Component, Inject, OnInit} from '@angular/core';
import {ShowPostService} from './show-post.service';
import {CommonService} from "../../service/common.service";
import {Post} from "../../models/post.model";


@Component({
  templateUrl: './show-post.component.html',
  selector: 'app-show-post',
  providers: [ShowPostService],
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {
  constructor(private showPostService: ShowPostService, private commonService: CommonService) {
  }


  public posts: any [];

  ngOnInit(): void {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    })
  }

  getAllPost() {
    this.showPostService.getAllPost().subscribe(result => {
      // @ts-ignore
      this.posts = result;
      console.log(result)
    });
  }

  editPost(post: Post){
    this.commonService.setPostToEdit(post);
  }
}
