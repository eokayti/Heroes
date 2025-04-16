import { Routes } from '@angular/router';
import { ListHeroComponent } from './pages/ListHero/listHero.component';
import { TopHeroComponent } from './pages/TopHero/topHero.component';
import { DetailHeroComponent } from './pages/DetailHero/detailHero.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'heroes-top', pathMatch: 'full' },
  { path: 'heroes-top', component: TopHeroComponent },
  { path: 'heroes-list', component: ListHeroComponent },
  { path: 'detail-heroes/:id', component: DetailHeroComponent },
];
