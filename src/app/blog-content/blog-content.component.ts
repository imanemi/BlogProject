import { Component, OnInit } from '@angular/core';
// import { BlogService } from '../service/blog.service';
import { HttpcallService } from '../service/httpcall.service';
import { HelperService } from './../service/helper.service';
// import { Blog } from './../blog';
import { Observable } from 'rxjs';

import { LoginService } from './../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { IBlog } from './../interface/IBlog';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  isDisable=false
  registeredUsers:{username:string,password:string,loginId:number}[];
  index:number
  blogs:IBlog [] = [];
  // blog:{id:number,title:string,description:string,image:string,loginId:number}[];
  constructor(private hp:HelperService,
              private hpc:HttpcallService, private login:LoginService,
              private route:Router,private actRout:ActivatedRoute) {
    this.registeredUsers=login.registeredUsers
  }
  getBlogs() {
    return this.blogs;
  }
  ngOnInit(): void {
  
    this.hpc.toGetAll().subscribe(
      (resBlogs)=>this.blogs = resBlogs,
      (error)=>console.log(error),
      ()=>console.log("Completed"));
      
  }
  getList(n:number):any[]{
    return Array(n);
  } 
  sendToDescription(str:any){
     this.hp.sharableData.emit(str);
  }
  getInnerLoopLimit(outerIndex: number, numImagesInRow: any) :number{
    // console.log(typeof numImagesInRow);
    if((outerIndex+numImagesInRow) > this.getBlogs().length){
      //this.disableButton(outerIndex)
        return this.getBlogs().length - 1;
    } else {
        return numImagesInRow
    }
  }
  getAddBlog() {
    if(this.login.getIsLoggedIn() === true) {
      this.route.navigate(['/addBlog'])
    } else {
      this.route.navigate(['/signin'])
    }
  }

  editBlog(index:number) {
    if(this.login.getIsLoggedIn() === true) {
      this.isDisable=true
      this.route.navigate([`/editBlog/${this.getBlogs()[index].id}`])
    } else {
      this.isDisable=false
      this.route.navigate(['/signin'])
    }
  }
  
  getDescriptionRoute(index:number) {
    return `/description/${this.getBlogs()[index].id}`
  }


getDesForId(index:number){return this.hpc.toGetForId(this.getBlogs()[index].id).subscribe}


  deleteBlog(index)
  {
    this.hpc.toDelete(this.getBlogs()[index].id).subscribe
    (
      blog=>alert(` The blog was  deleted with:${this.getBlogs()[index].id}`),
      err=>alert(`Got an error as ${err}`),
      ()=>alert(`Deletion of blog completed`)
      );
  }

}