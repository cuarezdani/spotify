import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './page/tracks-page/tracks-page.component';

const routes: Routes = [
  {
    path: '',
    component: TracksPageComponent,
    // se coloca outlet: 'child' para hacer referencia a el nombre que se coloco en el homepage.component.html
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
