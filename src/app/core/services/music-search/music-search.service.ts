import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Album } from '../../model/Search';
import { MusicApiService } from '../music-api/music-api.service';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  queries: string[] = []
  queryChange = new Subject<string>()

  getQueries() {
    return this.queries
  }

  searchAlbums(query: string): Observable<Album[]> {
    this.queries.push(query)
    this.queryChange.next(query)

    return this.service.fetchAlbumSearchResults(query)
  }

  constructor(
    protected service: MusicApiService,) { }
}
