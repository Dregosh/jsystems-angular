import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  selectedId = '234'

  playlists: Playlist[] = [/* Playlist */]

  select(id: string) {
    this.selectedId = id
  }

  constructor() { }

  ngOnInit(): void {
  }

}
