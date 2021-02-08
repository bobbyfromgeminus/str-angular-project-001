import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ConfigService, ITableCol } from 'src/app/service/config.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
    @Input() phraseString: string = '';
    filterKey: string = 'name';
    filterKeys: string[] = Object.keys(new Product());
  

    productList$: Observable<Product[]> = this.productService.getAll();
    cols: ITableCol[] = this.config.tableCols;
  
    constructor(
      private productService: ProductService,
      private config: ConfigService,
    ) {}

    ngOnInit(): void {}

    onChangePhrase(event: Event, key: string): void {
      this.filterKey = key;
      this.phraseString = (event.target as HTMLInputElement).value;
    }
  
    onUpdate(product: Product): void {
      this.productService.update(product).subscribe(
        updatedProduct => console.log(updatedProduct)
      );
    }
  
    onDelete(product: Product): void {
      this.productService.remove(product).subscribe(
        () => console.log('deleted')
      );
    }
    
  }