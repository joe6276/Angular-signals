import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,RouterModule,IonicModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  constructor(private postService:PostService){}
  $userPosts = this.postService.$UserPostsandDetails

  ngOnInit(): void {
    this.postService.postcomments$.subscribe(data=>{
      console.log(data);
      
    })

    this.postService.$UserPostsandDetails.subscribe(data=>{
      this.postService.changePostId(data[0].id)
      
    })
  }

  changeComments(id:number){
    this.postService.changePostId(id)
    
  }

}
