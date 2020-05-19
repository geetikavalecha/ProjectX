import { Component, OnInit, HostListener } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  result1: any;
  isActive: boolean;
  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public asset: string = '';
  public startDate: string = '';
  public endDate: string = ''; 
  imageSource1: any;
  imageSource2: any;
  imageSource3: any;
  result: any;
  text1 = '';
  text2 = '';
  text3 = '';
  disableButton: boolean = true;
  predict(){
    this.service.asset = this.asset;
    this.service.startDate = this.startDate;
    this.service.endDate = this.endDate;
    return this.service.sendGetRequest().subscribe(response => this.result = response);
  }
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    this.hitRefresh();
}
  hitRefresh(){
    return this.service.hit().subscribe(response => this.result1 = response);
  }
  allText() {
    this.text1 = 'Forecast Price: ';
    this.text2 = 'Return Variation: ';
    this.text3 = 'Variation from Average Price: ';
    }
  fnl(e) {this.isActive=!this.isActive}
}
