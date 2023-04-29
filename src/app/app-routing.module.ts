import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path:'',loadComponent:()=>import('./post/post.component').then(p=>p.PostComponent), children:[
    { path:':id', component:CommentComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
