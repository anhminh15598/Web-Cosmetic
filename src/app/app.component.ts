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
    this.auth.initUser();
  }
}
