import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent {

  title: string = "Post 목록 가져와 봅시다....";
  textData: string = "Hyungrok";

  buttonClicked() {
    console.log("Clicked");
  }

}
