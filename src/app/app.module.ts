import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavDashComponent } from './nav-dash/nav-dash.component';
import { LayoutModule } from '@angular/cdk/layout';

import { HttpClientModule } from '@angular/common/http';

//Material
import { MaterialModule } from './material/material'

//Services
import { YoutubeDataService } from './services/youtube-data.service';
import { SpotifyApiService } from './services/spotify-api.service'
import { LicencesComponent } from './licences/licences.component';

//Components
import { BeatsComponent } from './beats/beats.component';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { ArtistsComponent } from './artists/artists.component'




@NgModule({
  declarations: [
    AppComponent,
    NavDashComponent,
    BeatsComponent,
    LicencesComponent,
    YoutubeVideosComponent,
    SafeUrlPipe,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    YoutubeDataService,
    SpotifyApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
