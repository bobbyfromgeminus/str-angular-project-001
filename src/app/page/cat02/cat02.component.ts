import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  catid:number = 2;
  phrase: string = '';

  // Összes termék az 2-es kategóriából
  productsFromCategory: Product[]  = this.productService.getCategoryItems(this.productService.list, this.catid);

  // 5 db kiemelt termék az 2-es kategóriából (random)
  featuredProductsFromCategory: Product[]  = this.productService.getFeaturedItems(
    this.productService.randomize(
      this.productService.getCategoryItems(
        this.productService.getActiveItems(this.productService.list), this.catid
      )
    )
  ).slice(0, 5);

  categoryList: Category[] = this.categoryService.list;

  constructor(
    private productService: ProductService, private categoryService: CategoryService,
  ) { }
 
  ngOnInit(): void {
  }

}