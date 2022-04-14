import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { ProductTitleComponent } from './product-main/product-title/product-title.component';
import { ProductListComponent } from './product-main/product-list/product-list.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; // 왜 자동으로 안나올까..

@NgModule({
  declarations: [
    AppComponent,
    ProductHeaderComponent,
    ProductMainComponent,
    ProductFooterComponent,
    ProductTitleComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
