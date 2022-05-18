import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, concat, distinctUntilChanged, EMPTY, from, Observable, of, ReplaySubject, startWith, Subject, switchMap } from 'rxjs';
import { mockAlbums } from '../../mocks/mockAlbums';
import { Album } from '../../model/Search';
import { MusicApiService } from '../music-api/music-api.service';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  // queries: string[] = []
  // queryChange = new Subject<string>()

  private queries = new ReplaySubject<string>(5/* , 10_000 */)
  readonly queryChange = this.queries.asObservable()

  private results = new BehaviorSubject<Album[]>(mockAlbums)
  readonly resultsChanges = this.results.asObservable()


  searchAlbums(query: string): Observable<Album[]> {
    // this.results.getValue() // Sync get value - always!!

    this.queries.next(query)
    return this.resultsChanges
  }

  constructor(protected service: MusicApiService) {

    (window as any).subject = this.results
    
    this.queries.pipe(
      distinctUntilChanged(),
      switchMap(q => this.service.fetchAlbumSearchResults(q)
        .pipe(catchError(error =>
          // TODO: Global Error Handler
          EMPTY
        )))
    ).subscribe(this.results)
  }
}
