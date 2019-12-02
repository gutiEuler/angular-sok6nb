import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Topic } from '../models/topic';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class TopicService {

  endpoint:string = "http://www.mocky.io/v2/5de535eb2e00006b0031fc9d";

  constructor(private http: HttpClient) { }

  getTopics():Observable<Topic[]>{

    
    return this.http.get(this.endpoint).pipe(
      map(response => response as Topic[])
    );


  }

}