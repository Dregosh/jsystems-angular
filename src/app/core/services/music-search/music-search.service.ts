import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../model/Search';
import { MusicApiService } from '../music-api/music-api.service';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  queries: string[] = []

  getQueries(){
    return this.queries
  }

  searchAlbums(query: string): Observable<Album[]> {
    this.queries.push(query)

    return this.service.fetchAlbumSearchResults(query)
  }

  constructor(
    protected service: MusicApiService,) { }
}
