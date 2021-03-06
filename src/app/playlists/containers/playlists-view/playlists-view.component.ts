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
      name: "Playlista 123 <h1>Pwnd!</h1>",
      public: false,
      type:'playlist',
      description: 'top playlist'
    }, {
      id: '234',
      name: "Playlista 234",
      public: true,
      type:'playlist',
      description: 'best playlist ever'
    }, {
      id: '345',
      name: "Playlista 345",
      public: false,
      type:'playlist',
      description: 'fav playlist'
    }
  ]
  selectedId = ''
  selected?: Playlist // = this.playlists[1]

  selectPlaylist(id: string) {
    this.selectedId = id
    const selected = this.playlists.find(p => p.id === id)
    if (selected) {
      this.selected = selected
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.mode = 'editor'
  }

  cancel() {
    this.mode = 'details'
  }

  updatePlaylist(draft: Playlist) {
    console.log(draft);

    this.playlists = this.playlists.map(
      p => p.id === draft.id ? draft : p
    )

    this.selectedId = draft.id
    this.selected = draft;
    this.mode = 'details'

  }
}
