import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpClientModule } from '@angular/common/http';     // <- második felvonás
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from './pipe/category.pipe';
import { ActivePipe } from './pipe/active.pipe';
import { RandomizePipe } from './pipe/randomize.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';                // <- második felvonás

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductListComponent,
    ProductPagerComponent,
    ProductCardComponent,
    FilterPipe,
    CategoryPipe,
    ActivePipe,
    RandomizePipe,
    FeaturedPipe,
    SorterPipe,
    AdminComponent,
    DataEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,   // <- második felvonás
	  FormsModule         // <- második felvonás
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
