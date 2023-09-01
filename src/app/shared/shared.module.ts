import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [   
    SidebarComponent, //se debe exportar para que otro modulo lo utilice como el home.module
    MediaplayerComponent, // se debe exportar para que otro modulo lo utilice como el homepage.component.html
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent
   ]
})
export class SharedModule { }
