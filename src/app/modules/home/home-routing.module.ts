import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren:() => import('@modules/tracks/tracks.modules').then(m => m.TracksModule)
  },
  {
    path: 'favorite',
    loadChildren:() => import('@modules/favorite/favorite.modules').then(m => m.favoriteModule)
  },
  {
    path: 'history',
    loadChildren:() => import('@modules/history/history.modules').then(m => m.historyModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
