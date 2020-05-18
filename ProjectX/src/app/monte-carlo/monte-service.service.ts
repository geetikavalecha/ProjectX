import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class MonteServiceService {
  public asset1: string; 
  public asset2: string;
  public asset3: string;
  public asset4: string; 
  public startDate: string;
  public endDate: string; 
  public NoOfportfolios: number;
  private REST_API_SERVER = 'http://localhost:5000/portfolio?c1=';
  public HIT = 'http://localhost:5000/del';
  constructor( private http: HttpClient ) { }
  public sendGetRequest(){
    return this.http.get(this.REST_API_SERVER + this.asset1 + '&c2=' + this.asset2 + '&c3=' + this.asset3 + '&c4=' + this.asset4 +'&start=' + this.startDate + '&end=' + this.endDate + '&NoOfportfolios='  + this.NoOfportfolios)
    //console.log(response));
  }
  public hit(){
    return this.http.get(this.HIT)
  }
}
