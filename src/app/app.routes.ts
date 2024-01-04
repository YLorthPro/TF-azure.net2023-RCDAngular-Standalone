import { Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {SignalComponent} from "./signal/signal.component";

export const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'signal', component: SignalComponent}
];
