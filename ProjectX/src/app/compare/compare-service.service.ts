import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CompareServiceService {
  public asset1: string;
  public asset2: string;
  public startDate: string;
  public endDate: string; 
  private REST_API_SERVER = 'http://localhost:5000/test?company=';
  public HIT = 'http://localhost:5000/del';
  constructor( private http: HttpClient ) { }
  public sendGetRequest(){
    return this.http.get(this.REST_API_SERVER + this.asset1 + '&compare=' + this.asset2 + '&start=' + this.startDate + '&end=' + this.endDate)

  }
  public hit(){
    return this.http.get(this.HIT)
  }

}
