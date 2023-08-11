import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [   
    SidebarComponent //se debe exportar para que otro modulo lo utilice como el home.module
   ]
})
export class SharedModule { }
