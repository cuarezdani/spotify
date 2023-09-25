import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren:() => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren:() => import('@modules/favorite/favorite.module').then(m => m.FavoriteModule)
  },
  {
    path: 'history',
    loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
