import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  // angular 에서 서버와 통신할 때 사용하는 모듈은 axios 말고 HttpClient(Angular 내장 모듈) 사용한다..?
  // HttpClient를 사용하려면 app.module.ts에 모듈 등록을 해줘야 한다..?
  // Vue와 React에 비해 상대적으로 꽤나 복잡하다..?

  getPostFromFakeServer(): Observable<Post[]> { 
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts") // get해서 만들어둔 Post 모델 Type으로 return 하자..
    // rxjs 라는 Reactive 내부 모듈을 또 사용한다..
    // 얘는 실제로 데이터를 가져오는 게 아니라 context를 return 한다는 것이지..
    
  }
}
