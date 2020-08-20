import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;

  video() {
    console.log('im Play!');
    this.videoplayer?.Play();
  }

  changeText1: boolean;
  changeText2: boolean;

  constructor() {
    this.changeText1 = false;
    this.changeText2 = false;
  }
  ngOnInit(): void {}
}
