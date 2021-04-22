import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBlog } from '../interface/IBlog';
import { BlogService } from '../service/blog.service';
import { HttpcallService } from '../service/httpcall.service';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  blogs:IBlog [] = [];
  @ViewChild('blogForm') editBlogForm: NgForm;
  blog :IBlog = {id:-1,title:'',description:'',image:'',loginId:-1};
  blogTitle = '';
  blogDesc = '';
  blogImage = '';
  // blog:{id:number,title:string,description:string,image:string,loginId:number}[];
  constructor(private loginService: LoginService, private hpc:HttpcallService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  editBlog() {
    // console.log('onAddBlog: ', this.editBlogForm.form.value)
    this.blog.title = this.editBlogForm.form.value.blogTitle;
    this.blog.description = this.editBlogForm.form.value.blogDesc;
    this.blog.image = this.editBlogForm.form.value.blogImage;
    this.blog.id= this.route.snapshot.params['id']
    //this.blog.loginId = this.loginService.getLoginId();  // the id of current logged in user
    return this.hpc.toUpdate(this.blog).subscribe(
      blog=>alert(` the blog was  updated with:${this.blog.id}`),
      err=>alert(`got an error as ${err}`),
      ()=>alert(`updation of blog completed`)
      );
  }

 /* editBlog(index){
  
    this.getBlogs()[index].title="test"
    this.hpc.toUpdate(this.getBlogs()[index]).subscribe(
      blog=>alert(` the blog was  updated with:`),
      err=>alert(`got an error as ${err}`),
      ()=>alert(`updation of user completed`)
      );
  }*/

}
