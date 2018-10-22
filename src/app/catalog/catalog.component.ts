import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardTemplate} from '../model/card-template';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalog: CardTemplate[] = CardTemplate.catalog;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {


      });
  }

}

