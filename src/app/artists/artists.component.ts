import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from '../services/spotify-api.service'

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  
  dataArtist: any;
  dataAlbums: any;

  constructor(private spotifyS: SpotifyApiService) {
    this.getArtistData()
    this.getAlbumData()
  }

  ngOnInit() {

  }

  getArtistData(){
    this.spotifyS.getArtist()
      .subscribe(data => {
        this.dataArtist = data
        console.log(this.dataArtist)
      })
  }

  getAlbumData(){
    this.spotifyS.getAlbums()
      .subscribe(data => {
        this.dataAlbums = data
        console.log(this.dataAlbums)
      })
  }

}
