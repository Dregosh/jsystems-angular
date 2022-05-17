import { Component, OnInit } from '@angular/core';
import { mockAlbums } from 'src/app/core/mocks/mockAlbums';
import { Album } from 'src/app/core/model/Search';

@Component({
  selector: 'app-album-search-view',
  templateUrl: './album-search-view.component.html',
  styleUrls: ['./album-search-view.component.scss']
})
export class AlbumSearchViewComponent implements OnInit {

  results: Album[] = []

  searchAlbums(query = 'batman') {
    console.log(query);
    this.results = mockAlbums
  }

  constructor() { }

  ngOnInit(): void {
  }

}
