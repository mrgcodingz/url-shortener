import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getData(code: string) {
    let url = `${this.API_URL}/api/${code}`
    return this.http.get(url);
  }

  generateUrl(data: any): Observable<any> {
    let url = `${this.API_URL}/api/url-shorten`
    return this.http.post(url, data);
  }
}
