import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeatsComponent } from './beats/beats.component';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component'
import { ArtistsComponent } from './artists/artists.component'

const routes: Routes = [
  { path: 'beats', component: BeatsComponent },
  { path: 'videos', component: YoutubeVideosComponent },
  { path: 'artists', component: ArtistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
