import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
  datatype: string;
}

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'FOURkoló Élelmiszer Webáruház';

  tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false, datatype: 'number'},
    {key: 'catId', text: 'kategória', editable: true, datatype: 'number'},
    {key: 'name', text: 'név', editable: true, datatype: 'text'},
    {key: 'description', text: 'leírás', editable: true, datatype: 'text'},
    {key: 'image', text: 'kép', editable: true, datatype: 'image'},
    {key: 'price', text: 'ár', editable: true, datatype: 'number'},
    {key: 'stock', text: 'készlet', editable: true, datatype: 'number'},
    {key: 'featured', text: 'kiemelt', editable: true, datatype: 'bool'},
    {key: 'active', text: 'aktív', editable: true, datatype: 'bool'},
  ];

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'home'},
    {text: 'Hazai termékek', link: '/cat01'},
    {text: 'Import termékek', link: '/cat02'},
    {text: 'Admin', link: '/admin'},
  ];

  constructor() { }
}