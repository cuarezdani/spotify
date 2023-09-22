import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { Trackmodel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
mockTracksList: Array <Trackmodel> = [
 
]
  constructor () {}

  ngOnInit(): void {
    const { data } : any = (dataRaw as any).default
    this.mockTracksList = data;
  }
}
