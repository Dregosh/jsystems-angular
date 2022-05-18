import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatAll, concatMap, exhaustMap, filter, map, mergeAll, mergeMap, switchMap, tap } from 'rxjs';
import { mockAlbums } from 'src/app/core/mocks/mockAlbums';
import { Album } from 'src/app/core/model/Search';
import { MusicApiService } from 'src/app/core/services/music-api/music-api.service';
import { MusicSearchService } from 'src/app/core/services/music-search/music-search.service';

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
    protected service: MusicSearchService,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    const queryChanges = this.route.queryParamMap.pipe(
      map(qm => qm.get('q')),
      filter((q: any): q is string => typeof q === 'string'),
    )
    queryChanges.subscribe(q => { this.query = q })


    const resultsChanges = queryChanges.pipe(
      switchMap(query => this.service.searchAlbums(query)),
    )

    resultsChanges.subscribe(res => this.results = res)
  }

  searchAlbums(query = 'batman') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query }
    })
  }
}
