import { Component, OnInit} from '@angular/core';
import { YoutubeDataService } from '../services/youtube-data.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.css']
})



export class YoutubeVideosComponent implements OnInit {

  videosInfo: any;
  listVideoSubscription: any;
  channelInfo: any;
  channelSubscription: Subscription;
  id: string;
  
  

  constructor(private ytData: YoutubeDataService) { }

  // Replace this channel ID with the channel ID you want to subscribe to
  channelId = 'UCnmlCrWnJZ-YdDFcVKOnjhA';
  resource = {
    snippet: {
      resourceId: {
        kind: 'youtube#channel',
        channelId: this.channelId
      }
    }
  };

  ngOnInit() {
    this.id = 'UCd6nwuYzs-7Sdoi3ciBCNMg'
    this.channel(this.id)
    this.videosList(this.id);
    
  }

  channel(id){
    this.channelSubscription = this.ytData.getStats(id)
      .subscribe((data) => {
        this.channelInfo = data;
        // console.log(this.channelInfo)
      })
  }

  videosList(id){
    this.listVideoSubscription = this.ytData.getVideos(id)
    .subscribe((res) => {
      this.videosInfo = res ;
      // console.log(this.videosInfo)    
    })
  }

  addSubs(){
    this.ytData.addSubscription(this.resource)
      .subscribe((res) => {
        console.log(res)
      })
  }

}
