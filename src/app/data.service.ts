import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private servicesUrl = 'http://localhost:8080/services'; // Replace with your API URL
  private reviewsUrl = 'http://localhost:8080/reviews'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(this.servicesUrl);
  }

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.reviewsUrl);
  }
}