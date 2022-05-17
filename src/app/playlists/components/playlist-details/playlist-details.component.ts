import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/core/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  /* TODO: selected playlist */
  // @Input() playlist: Playlist // error
  // @Input() playlist: Playlist | undefined
  // @Input() playlist!: Playlist
  @Input() playlist?: Playlist
  

  constructor() { }

  ngOnInit(): void {
    if(!this.playlist) throw new Error('missing input')
  }

}
