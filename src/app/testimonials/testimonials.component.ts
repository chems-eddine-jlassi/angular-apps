import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(private config:ConfigService) { }
  Testimonials={}
  ngOnInit() {
    this.Testimonials = this.getTestimonials();
  }
  getTestimonials(){
    return this.config.getconfig().Testimonials;
  }
}
