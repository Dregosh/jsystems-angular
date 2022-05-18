import { Component, Inject, OnInit } from '@angular/core';
import { mockAlbums } from 'src/app/core/mocks/mockAlbums';
import { Album } from 'src/app/core/model/Search';
import { MusicApiService } from 'src/app/core/services/music-api/music-api.service';

@Component({
  selector: 'app-album-search-view',
  templateUrl: './album-search-view.component.html',
  styleUrls: ['./album-search-view.component.scss']
})
export class AlbumSearchViewComponent implements OnInit {

  message = ''
  results: Album[] = []

  searchAlbums(query = 'batman') {
    this.service
      .fetchAlbumSearchResults(query)
      .subscribe({
        next: res => {

          this.results = res;
        },
        error: res => this.message = (res.error.error.message),
        complete: () => console.log('complete'),
      })

  }

  constructor(
    protected service: MusicApiService
  ) { }

  ngOnInit(): void {
  }

}
