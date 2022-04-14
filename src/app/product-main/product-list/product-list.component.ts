import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  posts: Object[] = [];

  constructor(private service: ProductApiService) {} // DI(의존성 주입)을 통해 service 사용

  getDataFromServer() {
    this.service.getPostFromFakeServer()
      .subscribe((res) => {
        console.log(res);
        this.posts = res;
      });
  }
}
