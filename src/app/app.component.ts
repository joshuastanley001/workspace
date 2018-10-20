import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMPE-131';
  readonly categories: string [] = ['Birthday', 'Christmas', 'Graduation', 'Thank you'];
}
