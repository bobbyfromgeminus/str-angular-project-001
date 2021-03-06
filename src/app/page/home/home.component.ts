import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
  }

}