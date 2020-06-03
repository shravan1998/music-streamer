import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {MusicService} from '../music.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firestoreData: Observable<any[]>;
  musics;
  audioLink;
  album;
  artist;
  song;
 lib; 
  libraryData: any;
  documents: any;
  constructor(private musicService:MusicService) {
   // musicService;
   }

  ngOnInit() {
    this.firestoreData = this.musicService.getCollection('music');

    this.firestoreData.subscribe((firestoreData) => {
      console.log(firestoreData);
      console.log(firestoreData[0].id);
      // in the template you can use *ngFor="let business of businesses | async"
      this.musics=firestoreData;
    } );
  
   // this.documents = this.musicService.getCollection('music-streamer-f88a5')
  }
  

  playAudio(myAudio,link,id,album,artist,song) {
    
    console.log(link);
    console.log(myAudio);
    myAudio.src=link;
    console.log(id);
    myAudio.play();
    this.album=album;
    this.artist=artist;
    this.song=song;
  }

  pauseAudio(myAudio){
    myAudio.pause();
  }

  library(collectionid){
    
    var data={
    'library':1
    }
    
    this.musicService.updateDocument('music/'+collectionid,data);
  }
  remove(collectionid){
    console.log(collectionid);
    var data={
      'library':0
    }
    this.musicService.updateDocument('music/'+collectionid,data);
  }
}
