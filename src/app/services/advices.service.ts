import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdvicesService {
  baseApiUrl: string = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  getAdvice(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl);
  }
}
