import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-hero',
  imports: [CommonModule, RouterModule, FormsModule],
  standalone: true,
  templateUrl: './detailHero.component.html',
})
export class DetailHeroComponent implements OnInit {
  heroId: number | null = null;
  hero: { id: number; name: string } | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.heroId = +this.route.snapshot.paramMap.get('id')!;

    const arrList: { id: number; name: string }[] = JSON.parse(
      localStorage.getItem('heroesList') || '[]'
    );
    this.hero = arrList.find((hero) => hero.id === this.heroId);
    if (!this.hero) {
      console.log(`Empty Heroes`);
    }
  }
}
