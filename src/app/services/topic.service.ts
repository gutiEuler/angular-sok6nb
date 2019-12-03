import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { of } from 'rxjs';
import { Topic } from '../models/topic';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class TopicService {

  endpoint:string =  "http://www.mocky.io/v2/5de6140c2e00005d00320043";

  temas:Topic[] = 
     [
        {
            "id": 1,
            "name": "Uno",
            "descripcion": "Tema 1"
        },
       {
            "id": 2,
            "name": "Dos",
            "descripcion": "Tema 2"
        },
       {
            "id": 3,
            "name": "Tres",
            "descripcion": "Tema 3"
        }
    ];


  constructor(private http: HttpClient) { }

  getTopics():Observable<Topic[]>{

   /* 
    return this.http.get(this.endpoint).pipe(
      map(response => response as Topic[])
    );
    */

    return of(this.temas);

  }

}