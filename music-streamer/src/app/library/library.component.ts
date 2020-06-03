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
  Data: Observable<any[]>;
  lib: any[];
  constructor(private musicService:MusicService) { }

  ngOnInit() {
    this.firestoreData = this.musicService.getCollection('music');

    this.firestoreData.subscribe(firestoreData => {
     
          console.log(firestoreData);
          console.log(firestoreData[0].id);
          // in the template you can use *ngFor="let business of businesses | async"
          this.musics=firestoreData;
        }
      
     
    );
   
  }
  remove(collectionid){
    console.log(collectionid);
    var data={
      'library':0
    }
    this.musicService.updateDocument('music/'+collectionid,data);
  }

}
