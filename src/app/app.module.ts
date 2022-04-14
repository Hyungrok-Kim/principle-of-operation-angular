import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { ProductTitleComponent } from './product-main/product-title/product-title.component';
import { ProductListComponent } from './product-main/product-list/product-list.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
