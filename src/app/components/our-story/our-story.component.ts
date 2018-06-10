import { Component, OnInit } from '@angular/core';

import { content } from '../../../assets/content';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit {

  content = content;

  constructor() { }

  ngOnInit() {
  }

}
