import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatAll, concatMap, exhaustMap, filter, map, mergeAll, mergeMap, Subject, Subscription, switchMap, takeUntil, takeWhile, tap } from 'rxjs';
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

  queryChanges = this.route.queryParamMap.pipe(
    map(qm => qm.get('q')),
    filter((q: any): q is string => typeof q === 'string'),
  )

  resultsChanges = this.queryChanges.pipe(
    switchMap(query => this.service.fetchAlbumSearchResults(query)),
  )

  constructor(
    // protected service: MusicSearchService,
    protected service: MusicApiService,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }

  ngOnInit(): void { }

  searchAlbums(query = 'batman') {

    // Replace obserbable - AsyncPipe will switch!!
    this.resultsChanges = this.service.fetchAlbumSearchResults(query)

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query }
    })
  }
}
