import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'editor' | 'details' = 'details'


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
  selectedId = '234'
  selected: Playlist = this.playlists[1]

  selectPlaylist(id: string) {
    this.selectedId = id
    const selected = this.playlists.find(p => p.id === id)
    if (selected) {
      this.selected = selected
    }
  }

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
