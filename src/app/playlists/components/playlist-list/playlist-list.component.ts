import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  selectedId = '234'

  playlists = [{
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
  }]

  select(id: string) {
    this.selectedId = id
  }

  constructor() { }

  ngOnInit(): void {
  }

}
