import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { IBlog } from './../interface/IBlog';
import { HttpcallService } from '../service/httpcall.service';
import { HelperService } from './../service/helper.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  id:number
  currBlog :IBlog = {id:-1,title:'',description:'',image:'',loginId:-1};
  constructor(private hp:HelperService,private hpc:HttpcallService,
            private aroute:ActivatedRoute,private route:Router) { 
  }

  descriptionById(){
    console.log(this.id)
  }

  ngOnInit(): void {
    this.id = Number(this.aroute.snapshot.paramMap.get('id'))
    this.hpc.toGetForId(this.id).subscribe((resBlog)=>this.currBlog = resBlog);
  }
  getRoute(){
    this.route.navigate(['/blog'])
  }
}