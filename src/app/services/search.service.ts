import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { of, Subject } from 'rxjs';
import { Topic } from '../models/topic';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SearchService {


  searchSubject:Subject<string> =new Subject<string>();

  constructor() { }

  setSearch(search:string){
    this.searchSubject.next(search);
  }

  getSearch():Observable<string>{
    return this.searchSubject;
  }

}