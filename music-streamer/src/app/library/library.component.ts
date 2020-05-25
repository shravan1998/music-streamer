import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  firestoreData: Observable<any[]>;
  musics;
  audioLink;
  album;
  artist;
  song;
  constructor(private musicService:MusicService) { }

  ngOnInit() {
    this.firestoreData = this.musicService.getCollection('music');

    this.firestoreData.subscribe(firestoreData => {
      for(let i of firestoreData){
        if(i.library){
          console.log(firestoreData);
          console.log(firestoreData[0].id);
          // in the template you can use *ngFor="let business of businesses | async"
          this.musics=firestoreData;
        }
      }
     
    } );
  }

}
