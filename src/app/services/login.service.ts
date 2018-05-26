import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  url = 'https://q0fonsma89.execute-api.us-east-1.amazonaws.com/TEST/login';

  isLoggedIn = (localStorage.getItem('validUser') === 'true');

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  getOptions () {
      return {
        headers: new HttpHeaders({
        //   'Access-Control-Allow-Origin': '*',
          'Content-Type':  'application/json'
        })
      };
  }

  sendPassword (password: string) {
    return this.http.post(this.url, { 'password': password }, this.getOptions())
    .pipe(
        catchError(this.handleError)
      );
  }

}
