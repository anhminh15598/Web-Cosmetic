import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // slides = [
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  //   { img: '../../../assets/img/logo_cosmedica.png' },
  // ];
  // slideConfig = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   swipeToSlide: true,
  //   infinite: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 375,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  // addSlide() {
  //   this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e) {
  //   console.log('breakpoint');
  // }

  // afterChange(e) {
  //   console.log('afterChange');
  // }

  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

  constructor() {}

  ngOnInit(): void {}
}
