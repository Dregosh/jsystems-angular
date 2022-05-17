import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/core/model/Search';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album!: Album;

  constructor() { }

  ngOnInit(): void {
    // if .. throw error
  }

}
