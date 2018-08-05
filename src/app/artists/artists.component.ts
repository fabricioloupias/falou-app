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
  showSpinner: boolean = true;
  id_ozuna: string = '1i8SpTcr7yvPOmcqrbnVXY';
  id_daddy_yankee: string = '4VMYDCV2IEDYJArk749S6m';
  id_nicky_jam: string = '1SupJlEpv7RS2tPNRaHViT';
  tracksOzuna: any
  tracksDaddy: any
  tracksNickyJam: any
  dataArtistRelated: any;
  

  constructor(private spotifyS: SpotifyApiService) {
    this.showSpinner
  }

  ngOnInit() {
    this.getArtistData()
    this.getAlbumData()  
    this.topTracksOzuna()
    this.topTracksDaddyYankee()
    this.topTracksNickyJam()
    this.artistRelated()
  }

  getArtistData(){
    this.spotifyS.getArtist()
      .subscribe(data => {
        this.showSpinner = false;
        this.dataArtist = data
        //console.log(this.dataArtist)
      })
  }

  getAlbumData(){
    this.spotifyS.getAlbums()
      .subscribe(data => {
        this.dataAlbums = data
        //console.log(this.dataAlbums)
      })
  }
  topTracksOzuna(){
    this.spotifyS.getTopTracksOzuna(this.id_ozuna)
      .subscribe(data => {
        //console.log(data)
        this.tracksOzuna = data
      })
    
  }

  topTracksDaddyYankee(){
    this.spotifyS.getTopTracksDaddyYankee(this.id_daddy_yankee)
      .subscribe(data => {
        //console.log(data)
        this.tracksDaddy = data
      })
  }
  
  topTracksNickyJam(){
    this.spotifyS.getTopTracksNickyJam(this.id_nicky_jam)
      .subscribe(data => {
        console.log(data)
        this.tracksNickyJam = data
      })
  }

  artistRelated(){
    this.spotifyS.getArtistRelated()
      .subscribe(data => {        
        //console.log(data)
        this.dataArtistRelated = data
      })
  }

}
