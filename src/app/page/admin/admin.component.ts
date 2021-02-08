import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ConfigService, ITableCol } from 'src/app/service/config.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
    productNum: number = 0;
    firstItem: number = 0;
    lastItem: number = 0;
    pages: number = 0;
    itemsPerPage:  number = 10;
    currentPage: number = 1;
    
    productList$: Observable<Product[]> = this.productService.getAll().pipe(
      tap( productList => {
        this.productNum = productList.length;
        this.firstItem =  (this.currentPage - 1) * this.itemsPerPage;
        this.lastItem =  this.firstItem + this.itemsPerPage;
        this.pages = Math.ceil(this.productNum / this.itemsPerPage);
      }),
    );

    // Szűrés
    cols: ITableCol[] = this.config.tableCols;
    filterPhrase: string = '';
    filterKey: string = 'name';
    filterKeys: string[] = Object.keys(new Product());
    
    constructor(
      private productService: ProductService,
      private config: ConfigService,
    ) {}

    ngOnInit(): void {}
    
    // Beállítja az aktuális oldalszámot
    changePageNumber(page: number): void {
      this.currentPage = page;
      this.firstItem =  (this.currentPage - 1) * this.itemsPerPage;
      this.lastItem =  this.firstItem + this.itemsPerPage;
    }

    numSequence(n: number): Array<number> { 
      return Array(n); 
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