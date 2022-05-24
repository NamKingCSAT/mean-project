import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  getPosts() {
    //create a REAL copy of the object (not reference)
    //by pulling everything in the array and put into a new array
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
  }
}
