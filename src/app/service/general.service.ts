import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  currentRole = signal<string>("fullstack")
  constructor(private http: HttpClient) { }

  getData(role: string): Observable<Profile> {
    this.currentRole.set(role)
    if (role === "frontend") return this.getFrontEnd();
    return this.getFullStack();
  }
  getFullStack() {
    return this.http.get<Profile>("/data/fullstack.json");
  }
  getFrontEnd() {
    return this.http.get<Profile>("/data/frontend.json");
  }

  getRole() {
    return this.currentRole()
  }
}
