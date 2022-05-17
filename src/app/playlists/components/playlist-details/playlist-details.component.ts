import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from 'src/app/core/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input() playlist?: Playlist

  @Output() edit = new EventEmitter();

  editClick() {
    this.edit.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
