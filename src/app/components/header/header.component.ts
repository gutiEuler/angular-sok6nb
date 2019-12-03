import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search:string;

  constructor(private searchService:SearchService) { 

  }

  ngOnInit() {
  }

  setSearch(){
    this.searchService.setSearch(this.search);
    console.log("Hola");
  }
  

}