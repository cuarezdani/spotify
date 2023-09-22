import { Component, OnInit } from '@angular/core';
import { Trackmodel } from '@core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
mockCover: Trackmodel = {
  cover: 'https://www.dondeir.com/wp-content/uploads/2022/09/shakira-prepara-nuevo-album-estos-son-los-detalles-que-revelo.jpg',
  album: 'SHAKIRA',
  name: 'DANIELA',
  url: 'html://localhost/track.mp3',
  _id: 1
}
constructor(){}
ngOnInit(): void {
  
}
}
