import {Component, OnInit} from '@angular/core';
import {PostService} from "./post.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Post} from "./post";
import {Observable} from "rxjs";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

    posts!: Post[];

    constructor(private readonly _service: PostService) {
    }

  ngOnInit() {
    this._service.getAll().subscribe(
      value => this.posts = value
    );
  }
}
