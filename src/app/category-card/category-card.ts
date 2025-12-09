import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

import {Category} from '../model/category';

@Component({
  selector: 'category-card',
  // imports: [],
  templateUrl: './category-card.html',
  // styleUrl: ['./category-card.css'],
})

export class CategoryCardComponent implements OnInit{

  @Input({
    required: true
  })
  category!:Category;

  @Input({
    required: true,
  })
  index!: number;

  constructor() {}
  ngOnInit() {}

}
