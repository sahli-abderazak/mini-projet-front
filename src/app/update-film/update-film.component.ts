import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import {  Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film();
  genre! : Genre[];
updatedGenId! : number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    this.filmService.listeGenre().subscribe(gen => {
      this.genre = gen._embedded.genres;
      console.log(gen);
    });

    this.filmService.consulterFilm(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((film) => {
      this.currentFilm = film;
      this.updatedGenId = this.currentFilm.genre.idGenre;
    });
  }
  updateFilm() {
    // this.currentFilm.genre = this.genre.find(genre => genre.idGenre == this.updatedGenId)!;
    this.filmService.UpdateFilm(this.currentFilm).subscribe(
      (film: any) => {
    this.router.navigate(['films']);
  }
  );
}
}

