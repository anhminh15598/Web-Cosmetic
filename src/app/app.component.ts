import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web-cosmetic';
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    // this.initFacebookService();
    this.auth.initUser();
  }
  // private initFacebookService(): void {
  //   const initParams: InitParams = {
  //     appId: '107302417759540',
  //     status: true,
  //     cookie: true,
  //     xfbml: true,
  //     version: 'v3.2',
  //   };
  //   this.facebookService.init(initParams);
  // }
}
