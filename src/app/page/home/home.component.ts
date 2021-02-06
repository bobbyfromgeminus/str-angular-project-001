import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 5 db kiemelt termék (random)
  featuredProducts: Product[]  = this.productService.getFeaturedItems(
    this.productService.randomize(
      this.productService.getActiveItems(this.productService.list)
    )
  ).slice(0, 5);

  // 5 db bármilyen termék (random)
  randomizedProducts: Product[]  = this.productService.randomize(
    this.productService.getActiveItems(
      this.productService.list
    )
  ).slice(0, 5);

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }

}
