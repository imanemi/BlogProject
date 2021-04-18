import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { BlogService } from '../service/blog.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
id:number
currBlog:{id:number,title:string,description:string,image:string}
  blogs:{id:number,title:string,description:string,image:string}[];
  constructor(private bs:BlogService,private aroute:ActivatedRoute,private route:Router) { 
    //this.id=aroute.params.subscribe((res)=>this.id=res);
   // this.id=aroute.snapshot.params['id'];
   { this.blogs=bs.blogs}

   }
 

  descriptionById(){
  console.log(this.id)
  }

  ngOnInit(): void {
    
    this.id = Number(this.aroute.snapshot.paramMap.get('id'))
    this.currBlog=this.blogs.find(blog=>blog.id===this.id)
    //console.log(this.currBlog)
  }
  getRoute(){
    this.route.navigate(['/blog'])
  }
}
