import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.scss']
})
export class PlaylistEditorComponent implements OnInit {

  playlist = {
    id: '123',
    name: "Playlista ABC",
    public: false,
    description: 'best playlist ever'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
