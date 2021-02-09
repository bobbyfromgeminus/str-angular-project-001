import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';
import { ITableCol } from 'src/app/service/config.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();
  @Output() createClick: EventEmitter<Product> = new EventEmitter();

  @Input() products: Product[] = [];
  @Input() cols: ITableCol[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(product: Product, id): void {
    this.updateClick.emit(product);
    let element = document.querySelector('#tablerow_'+id);
    element.classList.add('update--anim');
  }

  onDelete(product: Product, id): void {
    this.deleteClick.emit(product);
    let element = document.querySelector('#tablerow_'+id);
    element.parentNode.removeChild(element);
  }

  onCreate(): void {
    let newprod: Product = {
      "id": 51,
      "catId": 1,
      "name": "Új termék",
      "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunce.",
      "image": "/assets/img/products/img10.jpg",
      "price": 99.99,
      "stock": 86,
      "featured": true,
      "active": false
      //"id": parseInt(document.querySelector('#new_id').value), 
      //"catId": parseInt(document.querySelector('#new_catid').value), 
      //"name": document.querySelector('#new_name').value, 
      //"description": document.querySelector('#new_description').value, 
      //"image": document.querySelector('#new_image').value, 
      //"price":parseInt(document.querySelector('#new_price').value), 
      //"stock": parseInt(document.querySelector('#new_stock').value), 
      //"featured": document.querySelector('#new_featured').value, 
      //"active": document.querySelector('#new_active').value,
    };
    this.createClick.emit(newprod);
  }

}