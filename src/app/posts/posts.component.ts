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

    loading = true

    posts!: Post[];

    constructor(private readonly _service: PostService) {
    }

  ngOnInit() {
    this._service.getAll().subscribe({
      next: (value) => this.posts=value,
      complete: () => this.loading=false
    });
  }
}
