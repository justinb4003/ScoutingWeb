import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchResults } from 'src/app/shared/models/2019/match-results.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private baseUrl: string = 'https://trisonics-scouting-funcapp.azurewebsites.net/api';
  private authCodeQuery: string = 'code=0qY3F3LcWhwsH84HdQK7BH7bO8D5Q8Ajwmho5hZ7GxD1yj5laeGQmA=='

  private apiHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient: HttpClient) {}

  private getFunctionUrl(method: string): string {
    return `${this.baseUrl}/${method}?${this.authCodeQuery}`;
  }

  public saveMatch(res: MatchResults): Observable<string> {
    return this.httpClient.post<string>(
      this.getFunctionUrl('MatchSubmit2019'),
      res,
      { headers: this.apiHeaders }
    );
  }
}
