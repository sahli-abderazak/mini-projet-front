
import {Genre } from '../model/genre.model';
import { FilmService } from '../services/film.service';
import { Film } from './../model/film.model';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
 
})
export class AddFilmComponent  implements OnInit {
  
  newFilm = new Film();
  genre! : Genre[];
  newIdgen! : number;
newGenre! : Genre;

  constructor(private filmService : FilmService , private router: Router){}

  ngOnInit(): void{
    this.filmService.listeGenre().subscribe((genr) => {
      console.log(genr);
      this.genre = genr._embedded.genres;
  }
    );

  }

  addFilm(){
    // this.newFilm.genre = this.genre.find(gen => gen.idGenre == this.newIdgen)!;
    this.filmService.ajouterFilm(this.newFilm).subscribe(films => {
this.router.navigate(['films']);
});


}
}
