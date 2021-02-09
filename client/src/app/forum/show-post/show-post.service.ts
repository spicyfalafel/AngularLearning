import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ShowPostService {
  constructor(private http: HttpClient) {
  }

  getAllPost() {
    console.log('getting posts');
    return this.http.get('/api/posts/', {});
  }
}
