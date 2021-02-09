import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../models/post.model";

@Injectable()
export class AddPostService {
  constructor(private http: HttpClient) {
  }

  postThePost(post: Post){
    return this.http.post('/api/posts/', post);
  }
}
