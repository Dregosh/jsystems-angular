import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'editor' | 'details' = 'details'

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.mode = 'editor'
  }

  cancel() {
    this.mode = 'details'
  }

}
