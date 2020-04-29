import { Component, OnInit, HostListener } from '@angular/core';
import { MonteServiceService } from './monte-service.service';

@Component({
  selector: 'app-monte-carlo',
  templateUrl: './monte-carlo.component.html',
  styleUrls: ['./monte-carlo.component.css']
})
export class MonteCarloComponent implements OnInit {

  result: any = '';
  result1: any;
  constructor(private monteservice: MonteServiceService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public asset: string = '';
  public startDate: string = '';
  public endDate: string = '';  
  imageSource;
  text = '';
  monteCarlo(){
    this.monteservice.asset = this.asset;
    this.monteservice.startDate = this.startDate;
    this.monteservice.endDate = this.endDate;
    return this.monteservice.sendGetRequest().subscribe(response => this.result = response);
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    this.hitRefresh();
}
  hitRefresh(){
    return this.monteservice.hit().subscribe(response => this.result1 = response);
  }
}
