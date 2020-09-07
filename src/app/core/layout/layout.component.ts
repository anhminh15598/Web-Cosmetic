import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private facebookService: FacebookService) {}
  ngOnInit(): void {
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = {
      appId: '759325634893052',
      cookie: true,
      xfbml: true,
      version: 'v8.0',
    };
    this.facebookService.init(initParams);
  }

  loginWithFacebook(): void {
    this.facebookService
      .login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }
}
