import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-hero',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './listHero.component.html',
})
export class ListHeroComponent {
  ngOnInit() {
    this.saveToLocalStorage();
  }
  arrList = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Ronaldo' },
    { id: 3, name: 'Batman' },
    { id: 4, name: 'Iron Man' },
    { id: 5, name: 'Spider-Man' },
    { id: 6, name: 'Captain America' },
    { id: 7, name: 'Wonder Woman' },
    { id: 8, name: 'Thor' },
    { id: 9, name: 'Hulk' },
    { id: 10, name: 'Black Panther' },
  ];
  saveToLocalStorage() {
    const arrListString = JSON.stringify(this.arrList);
    localStorage.setItem('heroesList', arrListString);
  }
}
