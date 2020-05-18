import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class BasicMonteService {
  public asset: string; 
  public startDate: string;
  public endDate: string; 
  public NoOfdays: number;
  private REST_API_SERVER = 'http://localhost:5000/test?company=';
  public HIT = 'http://localhost:5000/del';
  constructor( private http: HttpClient ) { }
  public sendGetRequest(){
    return this.http.get(this.REST_API_SERVER + this.asset + '&start=' + this.startDate + '&end=' + this.endDate + '&days='  + this.NoOfdays)
    //console.log(response));
  }
  public hit(){
    return this.http.get(this.HIT)
  }
}
