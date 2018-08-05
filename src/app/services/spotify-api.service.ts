import { Injectable } from '@angular/core';
import { switchMap, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  URI: string = ''
  id_artist:string
  topTracks: any
  

  constructor(private http: HttpClient) {
  }

  
  getArtist(){
    return this.http.get(this.URI+'api/spotify/artist')
  }

  getAlbums(){
    return this.http.get(this.URI+'api/spotify/albums')
  }

  getTopTracksOzuna(id_artist){
    return this.http.get(this.URI+'api/spotify/top-tracks-artist/'+id_artist)
  }
  getTopTracksDaddyYankee(id_artist){
    return this.http.get(this.URI+'api/spotify/top-tracks-artist/'+id_artist)
  }
  getTopTracksNickyJam(id_artist){
    return this.http.get(this.URI+'api/spotify/top-tracks-artist/'+id_artist)
  }

  getArtistRelated(){
    return this.http.get(this.URI+'api/spotify/artist-related')
  }

}
