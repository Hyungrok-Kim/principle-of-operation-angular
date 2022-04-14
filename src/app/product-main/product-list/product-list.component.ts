import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  posts: Post[] = [];

  constructor(private service: ProductApiService) {} // DI(의존성 주입)을 통해 service 사용

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer(): void {
    this.service.getPostFromFakeServer()
      .subscribe((res) => {
        console.log(res);
        this.posts = res;
      });
  }
}
