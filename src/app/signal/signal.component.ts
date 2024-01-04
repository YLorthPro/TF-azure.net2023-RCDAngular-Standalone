import {Component, computed, effect, Signal, signal} from '@angular/core';
import {Post} from "../post";
import {toSignal} from "@angular/core/rxjs-interop";
import {PostService} from "../post.service";
import {map} from "rxjs";

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  /*
   Signal: Valeur réactive, capable d’avertir ses dépendances de son changement.

   Deux types:
   - Writable Signals: singaux qui peuvent être modifiés.
   - Computed Signals: tirent leur valeur d’autres signaux => lecture seule.


  */

  posts?:Post[];

  writableSignal  = signal("Coucou");

  nonWritableSignal:Signal<Post[]|undefined> = toSignal(this._postService.getAll())

  constructor(private readonly _postService: PostService) {
    //Computed pour créer une dépendance réactive sur le signal non-modifiable.
    computed(() => {
      this.posts = this.nonWritableSignal();
    })

    /*
    effect pour exécuter du code en réponse à des modifications de dépendances réactives
    Est automatiquement planifiée pour être exécutée chaque fois que la valeur de l’un des signaux change
     */
    effect(()=>{
        console.log(this.writableSignal())
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
