import { Component, OnInit } from '@angular/core';
import {
  FacebookService,
  LoginResponse,
  LoginOptions,
  UIResponse,
  UIParams,
  FBVideoComponent,
} from 'ngx-facebook';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private fb: FacebookService) {
    console.log('Initializing Facebook');
    fb.init({
      appId: '759325634893052',
      xfbml: true,
      cookie: true,
      version: 'v2.8',
    });
  }

  login() {
    this.fb
      .login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }
  ngOnInit(): void {}
}
