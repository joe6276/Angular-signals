import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, map, switchMap } from 'rxjs';
import { Comments, Post, User, UserPosts } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  private selectedUser= new BehaviorSubject<number> (6)
  selectedUser$ = this.selectedUser.asObservable()

  private selectedPost= new BehaviorSubject<number> (1)
  selectedPost$ = this.selectedPost.asObservable()

   $posts = this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")

  $comments= this.http.get<Comments[]>("https://jsonplaceholder.typicode.com/comments")
  $users= this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")

  $selectedUserDetails= this.selectedUser$.pipe(
    switchMap(userId=> this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`))
  )

  changeUser(id:number){
    this.selectedUser.next(id)
  }

  changePostId(id:number){
    this.selectedPost.next(id)
  }

  $selecteduserPosts= combineLatest([
    this.$posts,
    this.$selectedUserDetails
  ]).pipe(
    map(([posts,user])=> posts.filter(post=>post.userId===user.id))
  );

  $UserPostsandDetails=combineLatest(
    [this.$selecteduserPosts,
    this.$selectedUserDetails]
  ).pipe(
 map(([post,user])=>
      post.map(post=>({
        ...post,
        user
      } as UserPosts))
    )
  )

  postcomments$= combineLatest([
    this.selectedPost$,
    this.$comments
  ]).pipe(
    map(([postid, comments])=>comments.filter(comment=>comment.postId===postid )) 
    
    )
  
}
