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
  constructor(private musicService:MusicService) {
   // musicService;
   }

  ngOnInit() {
    this.firestoreData = this.musicService.getCollection('music');

    this.firestoreData.subscribe(firestoreData => {
      console.log(firestoreData);
      console.log(firestoreData[0].id);
      // in the template you can use *ngFor="let business of businesses | async"
      this.musics=firestoreData;
    } );

  }
  

  playAudio(myAudio,link,id) {
    
    console.log(link);
    console.log(myAudio);
    myAudio.src=link;
    console.log(id);
    myAudio.play();
  }

  pauseAudio(myAudio){
    myAudio.pause();
  }

}
