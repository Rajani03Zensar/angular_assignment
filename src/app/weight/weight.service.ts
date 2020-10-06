import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Iweight } from './iweight';
import {catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
entries:Iweight[] 
private weightUrl:string='assets/data/weight/weight.json'

  constructor(private _httpClient:HttpClient) { }
  // getWeight():Iweight[]{
  //   return this.entries;
  // }
  getWeight():Observable<Iweight[]>{
    return this._httpClient.get<Iweight[]>(this.weightUrl)
    .pipe(
      tap((data)=>console.log(`All Products : ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    )
  }
  handleError(err){
    let errorMsg=''
    if(err.error instanceof Error){
      errorMsg=`An error occured :${err.error.messege}`;
    }
    else{
      errorMsg=`Server returned code:${err.status} error messege is:${err.messege}`
    }
    console.log(errorMsg)
    return throwError
  }
}
