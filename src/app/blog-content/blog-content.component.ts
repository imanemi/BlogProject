import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { HttpcallService } from '../service/httpcall.service';
import { HelperService } from './../service/helper.service';
import { Blog } from './../blog';
import { Observable } from 'rxjs';

import { LoginService } from './../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { IBlog } from './../interface/IBlog';
;

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  isDisable=false
  registeredUsers:{username:string,password:string,loginId:number}[];
  index:number
  blogs:IBlog
  blog:{id:number,title:string,description:string,image:string,loginId:number}[];
  constructor(private bs:BlogService,private hp:HelperService,
              private hpc:HttpcallService,private login:LoginService,
              private route:Router,private actRout:ActivatedRoute) { 
    this.blog=bs.blogs
    this.registeredUsers=login.registeredUsers
  }

  ngOnInit(): void {
   /* this.actRout.params.subscribe(params=>{
      this.hpc.toGetForId(+params['id']).subscribe(
        blog=>this.blog=blog
    );
        
  
      });
  */
  }
  getList(n:number):any[]{
    return Array(n);
  } 
  sendToDescription(str:any){
    this.hp.sharableData.emit(str);
  }
  getInnerLoopLimit(outerIndex: number, numImagesInRow: any) :number{
    console.log(typeof numImagesInRow);
    if((outerIndex+numImagesInRow) > this.blog.length){
      //this.disableButton(outerIndex)
        return this.blog.length - 1;
    } else {
        return numImagesInRow
    } 

    
}
getAddBlog(){
  this.route.navigate(['/addBlog'])
}
disableButton(index:number){
  //his.blogs.filter(blog=>blog.id===id)[0]
  //if((this.blog[index].loginId)===(this.registeredUsers[index].loginId))
  //this.isDisable=true;
  
  console.log(this.isDisable)

}
getDescriptionRoute(index:number){
 
  return `/description/${this.blog[index].id}`
  
      
}
createBlog(){
  
  this.hpc.toPost(this.blogs).subscribe(
    blog=>alert(`Anew blog cretated with:`),
    err=>alert(`got an error as ${err}`),
    ()=>alert(`Creation of user completed`)
  );

}
editBlog(index){
  
  this.blog[index].title="test"
  this.hpc.toUpdate(this.blog[index]).subscribe(
    blog=>alert(` the blog was  updated with:`),
    err=>alert(`got an error as ${err}`),
    ()=>alert(`updation of user completed`)
    );
}
getDesForId(index:number){return this.hpc.toGetForId(this.blog[index].id).subscribe}


deleteBlog(index)
{
  this.hpc.toDelete(this.blog[index].id).subscribe
  (
    blog=>alert(` The blog was  deleted with:`),
    err=>alert(`Got an error as ${err}`),
    ()=>alert(`Deletion of blog completed`)
    );
  
}
/*deleteBlog(obj){
  console.log(obj)
  this.blog = this.blog.filter(item => item.id !== obj);
  console.log(obj)
}*/
}