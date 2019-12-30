import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private config:ConfigService) { }
  footer ={} 
  ngOnInit() { this.footer = this.getfooter();
  }   
  getfooter(){
    return this.config.getconfig().footer;
  }
  }
  
