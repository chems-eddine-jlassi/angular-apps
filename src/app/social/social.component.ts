import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private config:ConfigService) { }
  social ={} ;
  ngOnInit() {
    this.social = this.getsocial();
  }
   getsocial(){
    return this.config.getconfig().social;
   }
}
