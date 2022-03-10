import {Injectable} from '@angular/core';
import {Entry} from "../entry";
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

   url = 'https://localhost:44383/api/phonebook/';
  constructor(private httpClient: HttpClient) { }

  getEntries(): Observable<any> {
    console.log("get")
    return this.httpClient.get<Entry[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  getEntry(name:string): Observable<any> {
    return this.httpClient.get<any>(this.url + name)
      .pipe(catchError(this.handleError));
  }

  addEntry(entry :Entry ) :Observable<any>{
    return this.httpClient.post<any>(this.url,entry)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error(`Backend returned code ${error.status}, body was ${error.error}`);
    return throwError('An error occured. See console for error');
  }
}
