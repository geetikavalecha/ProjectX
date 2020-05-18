import { Component, OnInit, HostListener } from '@angular/core';
import { MonteServiceService } from './monte-service.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-monte-carlo',
  templateUrl: './monte-carlo.component.html',
  styleUrls: ['./monte-carlo.component.css']
})
export class MonteCarloComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  maxDate = "2020-04-18"
  result: any = '';
  result1: any;
  constructor(private monteservice: MonteServiceService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public asset1: string = '';
  public asset2: string = '';
  public asset3: string = '';  
  public asset4: string = '';  
  public startDate: string = '';
  public endDate: string = ''; 
  public NoOfportfolios: number;
  elements: any;
  
  imageSource;
  text = '';
  monteCarlo(){
    this.monteservice.asset1 = this.asset1;
    this.monteservice.asset2 = this.asset2;
    this.monteservice.asset3 = this.asset3;
    this.monteservice.asset4 = this.asset4;
    this.monteservice.startDate = this.startDate;
    this.monteservice.endDate = this.endDate;
    this.monteservice.NoOfportfolios = this.NoOfportfolios;
    return this.monteservice.sendGetRequest().subscribe(response => this.result = response);
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    this.hitRefresh();
}
  hitRefresh(){
    return this.monteservice.hit().subscribe(response => this.result1 = response);
  }

  table(){
    this.elements = [
      {position: "MaxRisk" , value: this.result.MaxSharpeRisk},
      {position: "MaxReturn"},
      {position: "MaxW1"},
      {position: "MaxW2"},
      {position: "MaxW2"},
      {position: "MaxW2"},
      {position: "MinRisk"},
      {position: "MinReturn"},
      {position: "MinW1"},
      {position: "MinW2"},
      {position: "MinW3"},
      {position: "MinW4"},
    ];
  }
  
}
