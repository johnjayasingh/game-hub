import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private _httpClient: HttpClient) { }

  getGames(){
    return this._httpClient.get('http://starlord.hackerearth.com/gamesarena')
  }
}
