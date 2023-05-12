import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, EMPTY } from "rxjs";
import { Stats } from "@app/models/stats";
import { messages } from "@app/constants/messages";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'http://localhost:3000/stats'

  constructor( private http: HttpClient) { }

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(messages.GENERIC_ERROR, e)
    return EMPTY
  }
}
