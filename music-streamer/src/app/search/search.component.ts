import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { AngularFirestore } from '@angular/fire/firestore';
import {MusicService} from '../music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any;
  album: any;
  artist: any;
  song: any;

  constructor(public musicService:MusicService) { }
  searchstring=new FormControl();
  ngOnInit() {
  }
  search(){
    console.log(this.searchstring.value);
   let musicSearch = this.musicService.getMusics(this.searchstring.value,this.searchstring.value);
   musicSearch.subscribe(data=>{
     console.log(data)
     this.results=data;
   })
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

}
