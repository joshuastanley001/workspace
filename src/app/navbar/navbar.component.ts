import { Component, OnInit } from '@angular/core';
import {Category} from "../model/category";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly categories: Category [] = Category.categories;

  constructor() { }

  ngOnInit() {
  }

}
