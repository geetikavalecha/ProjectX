import { Component, OnInit, HostListener } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  result1: any;
  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public asset: string = '';
  public startDate: string = '';
  public endDate: string = ''; 
  imageSource: any;
  image: any;
  text = '';
  predict(){
    this.service.asset = this.asset;
    this.service.startDate = this.startDate;
    this.service.endDate = this.endDate;
    return this.service.sendGetRequest().subscribe(response => this.image = response);
  }
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    this.hitRefresh();
}
  hitRefresh(){
    return this.service.hit().subscribe(response => this.result1 = response);
  }
}
