import { Component, OnInit } from '@angular/core';
import {CardTemplate} from "../model/card-template";

@Component({
  selector: 'app-create-card',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  readonly catalog: CardTemplate[] = CardTemplate.catalog;

  constructor() { }

  ngOnInit() {
  }

}
