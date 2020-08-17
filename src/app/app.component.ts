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
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco', country: 'USA' },
    { id: 13, name: 'Bombasto', country: 'UK' },
    { id: 14, name: 'Celeritas', country: 'Canada' },
    { id: 15, name: 'Magneta', country: 'Russia' },
    { id: 16, name: 'RubberMan', country: 'China' },
    { id: 17, name: 'Dynama', country: 'Germany' },
    { id: 18, name: 'Dr IQ', country: 'Hong Kong' },
    { id: 19, name: 'Magma', country: 'South Africa' },
    { id: 20, name: 'Tornado', country: 'Sri Lanka' },
  ];
  ngOnInit(): void {
    this.auth.initUser();
  }
}
