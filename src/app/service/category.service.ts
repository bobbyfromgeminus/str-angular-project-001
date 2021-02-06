import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [  {"id":1,"name":"Hazai termékek","description":"Itt kapható minden, mit honfitársaink nagy műgonddal és szakértelemmel itthon termeltek."},
                        {"id":2,"name":"Import termékek","description":"Itt kapható minden, mi a határon túl termett, ám meleg szívvel tudjuk ajánlani."}];

  constructor() { }
}