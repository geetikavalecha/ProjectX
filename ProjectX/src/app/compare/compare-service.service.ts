import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CompareServiceService {
  public asset1: string;
  public asset2: string;
  public asset3: string;
  public asset4: string;
  public asset5: string;
  public startDate: string;
  public endDate: string; 
  private REST_API_SERVER = 'http://localhost:5000/Corr?c1=';
  public HIT = 'http://localhost:5000/del';
  constructor( private http: HttpClient ) { }
  public sendGetRequest(){
    return this.http.get(this.REST_API_SERVER + this.asset1 + '&c2=' + this.asset2 + '&c3=' + this.asset3 + '&c4=' + this.asset4 + '&c5=' + this.asset5 +'&start=' + this.startDate + '&end=' + this.endDate)

  }
  public hit(){
    return this.http.get(this.HIT)
  }

}
