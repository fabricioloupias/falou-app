import { Injectable } from '@angular/core';
import { switchMap, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) {}
  
  getArtist(){
    return this.http.get('http://localhost:3000/spotify/artist')
  }

  getAlbums(){
    return this.http.get('http://localhost:3000/spotify/albums')
  }


}
