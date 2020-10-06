import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Icommunity } from './icommunity';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  comments:Icommunity[]
  private commentUrl:string='assets/data/comment/comments.json'
  constructor(private _httpClient:HttpClient) { }

  getComment():Observable<Icommunity[]>{
    return this._httpClient.get<Icommunity[]>(this.commentUrl)
    .pipe(
      tap((data)=>console.log(`All Comments : ${JSON.stringify(data)}`)),
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

