import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/core/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  /* TODO: selected playlist */
  playlist: Playlist = {
    id: '123',
    name: "Playlista ABC",
    public: false,
    description: 'best playlist ever',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
