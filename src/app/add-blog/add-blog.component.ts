import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { HttpcallService } from './../service/httpcall.service';
import { NgForm, NgModelGroup } from '@angular/forms';
import { IBlog } from '../interface/IBlog';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  @ViewChild('blogForm') addBlogForm: NgForm;
  newBlog :IBlog = {id:-1,title:'',description:'',image:'',loginId:-1};
  blogTitle = '';
  blogDesc = '';
  blogImage = '';
  // blog:{id:number,title:string,description:string,image:string,loginId:number}[];
  constructor(private loginService: LoginService, private hpc:HttpcallService,bs:BlogService) { }

  ngOnInit(): void {
  }
 
  blogs:IBlog [] = [];
  onAddBlog() {
    // console.log('onAddBlog: ', this.addBlogForm.form.value)
    this.newBlog.title = this.addBlogForm.form.value.blogTitle;
    this.newBlog.description = this.addBlogForm.form.value.blogDesc;
    this.newBlog.image = this.addBlogForm.form.value.blogImage;
    this.hpc.toGetAll().subscribe(
      (resBlogs)=>this.blogs = resBlogs,
      (error)=>console.log(error),
      ()=>console.log("Completed"));
    this.newBlog.id = this.blogs.length;       // auto-generate the id
    this.newBlog.loginId = this.loginService.getLoginId();  // the id of current logged in user
    return this.hpc.toPost(this.newBlog).subscribe(blog=>alert(`A new blog is created with an id :${blog.id}`))
  }
}
