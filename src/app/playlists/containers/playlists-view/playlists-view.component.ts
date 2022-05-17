import { Component, OnInit } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'editor' | 'details' = 'details'

  selectedId = '234'

  playlists: Playlist[] = [
    {
      id: '123',
      name: "Playlista 123",
      public: false,
      description: 'top playlist'
    }, {
      id: '234',
      name: "Playlista 234",
      public: true,
      description: 'best playlist ever'
    }, {
      id: '345',
      name: "Playlista 345",
      public: false,
      description: 'fav playlist'
    }
  ]

  constructor() {
    // if (this.mode === 'details') {
    //   this.mode /// details
    // } else if (this.mode === 'editor') {
    //   this.mode
    // } else {
    //   this.mode // never
    // }

  }

  ngOnInit(): void {
  }

  edit() {
    this.mode = 'editor'
  }

  cancel() {
    this.mode = 'details'
  }

}
