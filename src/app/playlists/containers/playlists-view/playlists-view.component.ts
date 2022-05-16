import { Component, OnInit } from '@angular/core';

type ModeTypes = 'editor' | 'details';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {
  mode: ModeTypes = 'details'

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.mode = 'details'
  }

  cancel() {
    this.mode = 'details'
  }

}
