import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit{
  
  constructor(private post:PostService){}

  user$= this.post.$selectedUserDetails

  ngOnInit(): void {
    this.post.$selectedUserDetails.subscribe(data=>{
      console.log(data);
      
    })
  }
}
