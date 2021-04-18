import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
sharableData=new EventEmitter<string>();
  constructor() { }
}
