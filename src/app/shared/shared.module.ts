import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [   
    SidebarComponent, //se debe exportar para que otro modulo lo utilice como el home.module
    MediaplayerComponent, // se debe exportar para que otro modulo lo utilice como el homepage.component.html
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
   ]
})
export class SharedModule { }
