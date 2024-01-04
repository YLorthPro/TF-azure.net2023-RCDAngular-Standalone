import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _urlPost : string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<Post[]>{
    return this._httpClient.get<Post[]>(this._urlPost)
  }
}
