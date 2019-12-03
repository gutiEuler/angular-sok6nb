import { Component, OnInit } from '@angular/core';

import { Topic } from '../../models/topic';

import { TopicService} from '../../services/topic.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private topicService:TopicService) { }

  topics:Topic[];
  
  ngOnInit() {
    this.topicService.getTopics().subscribe(response => {
      this.topics=response as Topic[];
    });
  }

}