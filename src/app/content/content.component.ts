import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private config:ConfigService) { }
  Content ={}  
  ngOnInit() {
    this.Content = this.getContent();
  }
  getContent(){
    return this.config.getconfig().Services;
  }
}
