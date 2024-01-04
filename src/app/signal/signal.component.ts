import {Component, computed, effect, Signal, signal} from '@angular/core';
import {Post} from "../posts/post";
import {toSignal} from "@angular/core/rxjs-interop";
import {PostService} from "../posts/post.service";

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  posts?:Post[];

  writableSignal  = signal("Coucou");

  nonWritableSignal:Signal<Post[]|undefined> = toSignal(this._postService.getAll())

  constructor(private readonly _postService: PostService) {
    //Computed pour créer une dépendance réactive sur le signal non-modifiable.
    computed(() => {
      this.posts = this.nonWritableSignal();
    })

    //effect pour exécuter du code en réponse à des modifications de dépendances réactives
    effect(()=>{
        console.log("Changement")
      }
    )

  }

  updateSignal(){
    this.writableSignal.update(origine => origine+" les fullstack!");
  }

  setSignal(){
    this.writableSignal.set("Bonne journée");
  }
}
