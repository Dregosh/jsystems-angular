import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatAll, concatMap, exhaustMap, filter, map, mergeAll, mergeMap, switchMap, tap } from 'rxjs';
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

    const queryChanges = this.route.queryParamMap.pipe(
      map(qm => qm.get('q')),
      filter((q: any): q is string => typeof q === 'string'),
    )
    queryChanges.subscribe(q => { this.query = q })


    const resultsChanges = queryChanges.pipe(
      // mergeMap(query => this.service.fetchAlbumSearchResults(query)),
      // concatMap(query => this.service.fetchAlbumSearchResults(query)),
      // exhaustMap(query => this.service.fetchAlbumSearchResults(query)), // throttle - first!
      switchMap(query => this.service.fetchAlbumSearchResults(query)), // debounce - latest!
    )
    
    resultsChanges.subscribe(res => this.results = res)

    //  Observable< Observable< AlbumResponse[] > >
    // resultsChanges.subscribe(obs =>
    //   obs.subscribe(res => this.results = res))



    // ).subscribe(q => {
    //   this.service
    //     .fetchAlbumSearchResults(q)
    //     .subscribe({
    //       next: res => this.results = res,
    //       error: error => this.message = error.message,
    //     })
    // })
  }

  searchAlbums(query = 'batman') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query }
    })
  }
}
