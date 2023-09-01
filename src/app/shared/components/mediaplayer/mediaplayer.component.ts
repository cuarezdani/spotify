import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
mockCover: any = {
  cover: 'https://www.dondeir.com/wp-content/uploads/2022/09/shakira-prepara-nuevo-album-estos-son-los-detalles-que-revelo.jpg',
  album: 'SHAKIRA',
  name: 'DANIELA',
}
constructor(){}
ngOnInit(): void {
  
}
}
