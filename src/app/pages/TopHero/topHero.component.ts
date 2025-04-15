import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-hero',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './topHero.component.html',
})
export class TopHeroComponent implements OnInit {
  topHeroes: any[] = [];

  ngOnInit(): void {
    this.getTopHeroesFromLocalStorage();
  }

  getTopHeroesFromLocalStorage() {
    const heroesListString = localStorage.getItem('heroesList');

    if (heroesListString) {
      const heroesList = JSON.parse(heroesListString);

      this.topHeroes = heroesList.slice(0, 4);
    }
  }
}
