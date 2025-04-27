import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Logbook} from '../models/logbook.model'

@Injectable({
  providedIn: 'root'
})
export class Logbookservice{
  private contactUrl = 'http://localhost:8080/feed/logbook'; 

  constructor(private http: HttpClient) {}

  getContact(): Observable<Logbook[]> {
    return this.http.get<Logbook[]>(this.contactUrl);
  }

  deleteEntry(id: string): Observable<any> {
    return this.http.delete<any>(`${this.contactUrl}/${id}`);
  }
}
