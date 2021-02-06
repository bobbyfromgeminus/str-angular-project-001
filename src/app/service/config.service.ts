import { Injectable } from '@angular/core';

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

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'home'},
    {text: 'Hazai termékek', link: '/cat01'},
    {text: 'Import termékek', link: '/cat02'},
  ];

  constructor() { }
}
