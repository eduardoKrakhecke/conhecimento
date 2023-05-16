import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, EMPTY } from "rxjs";
import { messages } from "@app/constants/messages";
import {Category} from "@app/models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:3000/categories'

  constructor( private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(messages.GENERIC_ERROR, e)
    return EMPTY
  }
}
