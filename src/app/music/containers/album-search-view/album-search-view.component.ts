import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';
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

    this.route.queryParamMap.pipe(
      map(qm => qm.get('q')),
      filter((q: any): q is string => typeof q === 'string'),
      tap(q => { this.query = q }),
    ).subscribe(q => {

      this.service
        .fetchAlbumSearchResults(q)
        .subscribe({
          next: res => this.results = res,
          error: error => this.message = error.message,
        })
    })
  }

  searchAlbums(query = 'batman') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query }
    })
  }
}
