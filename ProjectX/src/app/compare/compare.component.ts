import { Component, OnInit, HostListener } from '@angular/core';
import { CompareServiceService } from './compare-service.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  result: any = '';
  result1: any;
  image: any =[];
  constructor(public compareservice: CompareServiceService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public asset1: string = '';
  public asset2: string = '';
  public asset3: string = '';
  public asset4: string = '';
  public asset5: string = '';
  public startDate: string = '';
  public endDate: string = '';  
  imageSource1;
  imageSource2;
  text1 = '';
  text2 = '';
  compare(){
    this.compareservice.asset1 = this.asset1;
    this.compareservice.asset2 = this.asset2;
    this.compareservice.asset3 = this.asset3;
    this.compareservice.asset4 = this.asset4;
    this.compareservice.asset5 = this.asset5;
    this.compareservice.startDate = this.startDate;
    this.compareservice.endDate = this.endDate;
    return this.compareservice.sendGetRequest().subscribe(response => this.result = response);
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    this.hitRefresh();
}
  hitRefresh(){
    return this.compareservice.hit().subscribe(response => this.result1 = response);
  }

  allText() {
    this.text1 = 'Risk Rate Comparison: ';
    this.text2 = 'Correlation: ';
    }
  
}
