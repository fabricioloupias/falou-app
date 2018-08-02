import { Injectable } from '@angular/core';
import { switchMap, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  URI: string = 'http://localhost:5001/falou-music/us-central1/app/'

  constructor(private http: HttpClient) {}
  
  getArtist(){
    return this.http.get('/api/spotify/artist')
  }

  getAlbums(){
    return this.http.get('/api/spotify/albums')
  }


}
