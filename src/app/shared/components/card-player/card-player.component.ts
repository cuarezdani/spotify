import { Component, Input, OnInit } from '@angular/core';
import { Trackmodel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
@Input() mode: 'small' | 'big' = 'small';
@Input() track: Trackmodel = {_id: 0, name: '', album: '', url:'', cover:''};
constructor() {}
ngOnInit(): void {
  
}
}
