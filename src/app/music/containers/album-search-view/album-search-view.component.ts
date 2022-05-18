import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  query = ''

  constructor(
    protected service: MusicApiService,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const q = this.route.snapshot.queryParamMap.get('q')
    if (q) {
      this.query = q
      this.searchAlbums(q)
    }
  }

  searchAlbums(query = 'batman') {

    this.service
      .fetchAlbumSearchResults(query)
      .subscribe({
        next: res => this.results = res,
        error: error => this.message = error.message,
        // complete: () => console.log('complete'),
      })

  }


}
