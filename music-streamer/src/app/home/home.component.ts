import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  playAudio(myAudio,link) {
    myAudio.play();
    console.log(link.src);
  }

  pauseAudio(myAudio){
    myAudio.pause();
  }

}
