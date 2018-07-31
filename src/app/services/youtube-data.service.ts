import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { switchMap, map, startWith } from 'rxjs/operators';
import { interval, pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  

  constructor(private http: HttpClient) { }

  getStats(id){
    return interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.http.get("https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet,contentDetails&id="+id+"&key=AIzaSyCEl8WwJraLVIshXvjy24tckQtXtbJF8Bc")),
        map(res => res)
      )
  }

  getVideos(id){
    return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+id+"&maxResults=8&order=date&key=AIzaSyCEl8WwJraLVIshXvjy24tckQtXtbJF8Bc")
  }

  addSubscription(resource) {
    try{
      return this.http.post('https://www.googleapis.com/youtube/v3/subscriptions', resource)   
    }catch (e) {
      if(e.message.match('subscriptionDuplicate')) {
        console.log('Cannot subscribe; already subscribed to channel: ' );
      } else {
        console.log('Error adding subscription: ' + e.message);
      }
    }    
  }
}
