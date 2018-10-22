import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardTemplate} from '../model/card-template';
import {Category} from '../model/category';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  readonly categories: Category [] = Category.categories;
  readonly catalog: CardTemplate[] = CardTemplate.catalog;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {


      });
  }

}

