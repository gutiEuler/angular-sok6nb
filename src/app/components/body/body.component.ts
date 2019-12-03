import { Component, OnInit } from '@angular/core';

import { Topic } from '../../models/topic';

import { TopicService} from '../../services/topic.service';

import { SearchService} from '../../services/search.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private topicService:TopicService, private searchService:SearchService) { }

  topics:Topic[];
  search:string;

  ngOnInit() {
    this.topicService.getTopics().subscribe(response => {
      this.topics=response as Topic[];
    });


    this.searchService.getSearch().subscribe(
      response => {
        this.search = response;
        console.log("Search");
      }

    )

  }

}