import { Component, OnInit} from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',

})
export class FilmsComponent implements OnInit {
  films : Film[]=[];
  
 
  constructor(private filmService:FilmService,
    public authService: AuthService) {
    
    }
    ngOnInit(): void {
      this.chargerFilms();
      }
    chargerFilms(){
      this.filmService.listeFilm().subscribe(film => {
        console.log(film);
        this.films = film;
        });
      }
      supprimerFilm(f: Film) {
        let conf = confirm('Etes-vous sûr ?');
        if (conf)
          this.filmService.supprimerFilm(f.idFilm).subscribe(() => {
            this.chargerFilms();
          });
      }
    
   
}

