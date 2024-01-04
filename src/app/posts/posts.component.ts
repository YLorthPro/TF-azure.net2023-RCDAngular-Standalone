import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Post} from "../post";
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {takeLast} from "rxjs";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    FormsModule,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

    loading = true

    posts!: Post[];

    couleur: string;

    constructor(private readonly _service: PostService) {
      this.couleur = "bleu"
    }

  ngOnInit() {
    this._service.getAll().subscribe({
      next: (value) => this.posts=value,
      complete: () => this.loading=false
    });
  }
}
