import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../blog';
import { IBlog } from './../interface/IBlog';


@Injectable({
  providedIn: 'root'
})
export class HttpcallService {
  url="http://localhost:3000/blog"

  constructor(private hp:HttpClient) { }

  toGetAll():Observable<IBlog[]>
    {
      return this.hp.get<IBlog[]>(this.url)
    }
  toGetForId(id:any):Observable<IBlog>
  {
    return this.hp.get<IBlog>(`${this.url}/${id}`)
  }
  toPost(bl:IBlog):Observable<IBlog>
  {
    return   this.hp.post<IBlog>(this.url,bl)
  
}
  toUpdate(bl:IBlog):Observable<IBlog>
  {
    return   this.hp.put<IBlog>(`${this.url}/${bl.id}`,bl)
  
  }
  toDelete(id:number):Observable<IBlog>{
   
    return this.hp.delete<IBlog>(`${this.url}/${id}`);
    
    
  }
}
