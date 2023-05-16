import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, EMPTY } from "rxjs";
import { Articles } from "@app/models/articles";
import { messages } from "@app/constants/messages";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl = 'http://localhost:3000/articles'

  constructor( private http: HttpClient) { }

  getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(messages.GENERIC_ERROR, e)
    return EMPTY
  }
}
