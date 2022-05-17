import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.scss']
})
export class PlaylistEditorComponent implements OnInit {

  @Input() playlist?= {
    id: '',
    name: "",
    public: false,
    description: ''
  }

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  cancelClick() {
    this.cancel.emit()
  }

  submit() {
    this.save.emit(this.playlist)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
