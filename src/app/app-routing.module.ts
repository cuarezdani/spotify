import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';

const routes: Routes = [
  {//se agrega el auth en este punto porque al colocarlo aqui rompe con todos los 
    //otros modulos para salir y autenticarse (aqui estan los modulos principales)
    path: 'auth', // todo: localhost:4200/
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
  path: '', // todo: localhost:4200/
  component: HomepageComponent,
  loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
