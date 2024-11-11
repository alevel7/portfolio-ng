import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Profile> {
    return this.http.get<Profile>("http://localhost:4200/data/fullstack.json");
  }
}
