import { Component, OnInit } from '@angular/core';
import { YoutubeDataService } from '../services/youtube-data.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beats',
  templateUrl: './beats.component.html',
  styleUrls: ['./beats.component.css']
})
export class BeatsComponent implements OnInit {

  channelInfo: any;
  channelSubscription: Subscription;

  constructor(private ytData: YoutubeDataService) { }

  ngOnInit() {
    this.channel('UCd6nwuYzs-7Sdoi3ciBCNMg')
  }

  channel(id){
    this.channelSubscription = this.ytData.getStats(id)
      .subscribe((res) => {
        this.channelInfo = res;
        console.log(res)
      })
  }

  ngOnDestroy() {
    this.channelSubscription.unsubscribe()
  }

}
