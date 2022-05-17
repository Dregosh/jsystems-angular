import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

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

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log('ngOnDestroy');
  }
}
