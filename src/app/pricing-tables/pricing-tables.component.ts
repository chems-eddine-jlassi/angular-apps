import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-pricing-tables',
  templateUrl: './pricing-tables.component.html',
  styleUrls: ['./pricing-tables.component.css']
})
export class PricingTablesComponent implements OnInit {

  constructor(private config:ConfigService) { }
  Pricing={}
  ngOnInit() {
    this.Pricing= this.getPricing();
  }
  getPricing(){
    return this.config.getconfig().Pricing;
  }
}
