import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post, User } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  private usernameSelected= new BehaviorSubject<number> (1)
  usernameSelected$ = this.usernameSelected.asObservable()

  $posts = this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")

  $comments= this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
  $users= this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
}
