import { Injectable } from '@angular/core';
import { concat, from, Observable, of, Subject } from 'rxjs';
import { Album } from '../../model/Search';
import { MusicApiService } from '../music-api/music-api.service';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  queries: string[] = []
  queryChange = new Subject<string>()

  results: Album[] = []
  resultsChanges = new Subject<Album[]>()

  getQueries() {
    return concat(
      from(this.queries),
      this.queryChange
    )
  }

  searchAlbums(query: string): Observable<Album[]> {
    this.queries.push(query)
    this.queries = this.queries.slice(-5)
    this.queryChange.next(query)

    this.service.fetchAlbumSearchResults(query).subscribe(res => {
      this.results = res;
      this.resultsChanges.next(res)
    })

    return this.resultsChanges.asObservable()
  }

  constructor(protected service: MusicApiService) { }
}
