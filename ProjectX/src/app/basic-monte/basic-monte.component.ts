import { Component, OnInit, HostListener } from '@angular/core';
import { BasicMonteService } from './basic-monte.service';

@Component({
  selector: 'app-basic-monte',
  templateUrl: './basic-monte.component.html',
  styleUrls: ['./basic-monte.component.css']
})
export class BasicMonteComponent implements OnInit {
  result1: any;
  constructor(private service: BasicMonteService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public asset: string = '';
  public startDate: string = '';
  public endDate: string = ''; 
  public NoOfdays: number;
  imageSource1: any;
  imageSource2: any;
  result: any;
  text1 = '';
  text2 = '';
  disableButton: boolean = true;
  predict(){
    this.service.asset = this.asset;
    this.service.startDate = this.startDate;
    this.service.endDate = this.endDate;
    this.service.NoOfdays = this.NoOfdays;
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
    this.text1 = 'Forecast price for the provided end date: ';
    this.text2 = 'Histogram Interpretation: ';
    }
  
}
