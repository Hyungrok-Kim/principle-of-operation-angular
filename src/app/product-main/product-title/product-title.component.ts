import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent {

  title: string = "상품 목록입니다.";
  textData: string = "Hyungrok";

  buttonClicked() {
    console.log("Clicked");
  }

}
