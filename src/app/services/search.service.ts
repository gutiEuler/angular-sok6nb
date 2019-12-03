import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { of } from 'rxjs';
import { Topic } from '../models/topic';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SearchService {

  search:string;

  constructor() { }

  setSearch(search:string){
    this.search = search;
  }

  getSearch():string{
    return this.search;
  }

}