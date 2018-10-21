import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly categories: string [] = ['All', 'Birthday', 'Christmas', 'Graduation', 'Thank you'];

  constructor() { }

  ngOnInit() {
  }

}
