import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { HttpcallService } from './../service/httpcall.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blog:{id:number,title:string,description:string,image:string,loginId:number}[];
  constructor(private hpc:HttpcallService,bs:BlogService) { this.blog=bs.blogs}

  ngOnInit(): void {
  }
  addBlog(){
    //this.blog[index].id=null
    //return this.hpc.toPost(this.blog).subscribe
    //(blog=>alert(`Anew user created with an id :${blog.id}`))
  }
  onSubmit(addB:any){
    console.log(addB)
  }
}
