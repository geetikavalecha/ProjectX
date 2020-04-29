import { Component, OnInit, HostListener } from '@angular/core';
import { CompareServiceService } from './compare-service.service';
import { Observable } from 'rxjs';

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
  public startDate: string = '';
  public endDate: string = '';  
  imageSource;
  text = '';
  compare(){
    this.compareservice.asset1 = this.asset1;
    this.compareservice.asset2 = this.asset2;
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
  
}
