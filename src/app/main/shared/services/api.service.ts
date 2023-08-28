import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // baseUrl = environment.base_url;

  constructor(
    protected httpClient: HttpClient,
    @Inject('BASE_URL') public baseUrl: string
  ) {}

  /**
   * Get Base Url
   * @param uri string
   */
  getBaseUrl(): any {
    return this.baseUrl;
  }

  /**
   * GET request
   */
  get(uri: string, config: any = {}): Observable<any> {
    return this.httpClient
      .get(this.getBaseUrl() + uri, {
        ...config,
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * PATCH request
   */
  patch(uri: string, data: any, config: any = {}): Observable<any> {
    return this.httpClient
      .patch(this.getBaseUrl() + uri, data, {
        ...config,
      })
      .pipe(catchError((err) => this.handleError(err)));
  }

  /**
   * PUT request
   */
  put(uri: string, data: any): Observable<any> {
    return this.httpClient
      .put(this.getBaseUrl() + uri, data)
      .pipe(catchError((err) => this.handleError(err)));
  }

  /**
   * POST request
   */
  post(uri: string, data: any, config: any = {}): Observable<any> {
    return this.httpClient
      .post(this.getBaseUrl() + uri, data, { ...config })
      .pipe(catchError((err) => this.handleError(err)));
  }

  /**
   * DELETE request
   */
  delete(uri: string): Observable<any> {
    return this.httpClient
      .delete(this.getBaseUrl() + uri)
      .pipe(catchError((err) => this.handleError(err)));
  }

  /**
   * Handle general errors from the API
   *
   * @param err
   * @returns {ErrorObservable}
   */
  private handleError(err: any) {
    return observableThrowError(err);
  }
}
