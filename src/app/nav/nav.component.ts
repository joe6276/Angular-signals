import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  
  constructor (private postService:PostService){}
  users$= this.postService.$users

  changeUser(event:Event){
    let id = + (event.target as  HTMLSelectElement).value
    this.postService.changeUser(id)
  }
}
