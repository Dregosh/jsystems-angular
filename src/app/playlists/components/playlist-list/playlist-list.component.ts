import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  @Input() selectedId = ''

  @Input('items') playlists: Playlist[] = []

  @Output() selectedIdChange = new EventEmitter<string>();

  select(id: string) {
    this.selectedId = id

    this.selectedIdChange.emit(id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
