import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Egy keresőszóra vár
  @Input() phraseString: string = '';

  // Termékekre vár
  @Input() products: Product[] = [];

  key: string = '';

  constructor( private productService: ProductService ) {}

  ngOnInit(): void {}

  // Átadja a phraseString változónak az HTML input mező tartalát
  onChangePhrase(event: Event, key: string): void {
    this.key = key;
    this.phraseString = (event.target as HTMLInputElement).value;
  }

  showActive(): void {
    this.products = this.productService.getActiveItems(this.products);
  }

  showInactive(): void {
    this.products = this.productService.getInactiveItems(this.products);
  }

  showAll(): void {
    this.products = this.productService.getAllItems(this.products);
  }

  sortBy(property: string): void {
    this.products = this.productService.sortBy(this.products, property);
  }

}