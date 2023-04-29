import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './comment.component.html',
})
export class CommentComponent {

 constructor( private postService:PostService){}

 comments$=this.postService.postcomments$
 }
