import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mockAlbums } from '../../mocks/mockAlbums';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http'
import { map, Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Album, AlbumSearchResponse, PagingObject } from '../../model/Search';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(
    @Inject(API_URL) private api_url: string,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  fetchAlbumSearchResults(query = '') {

    return this.http.get<AlbumSearchResponse>(//
      this.api_url + 'search', {
      params: {
        type: 'album', query
      },
      headers: {
        Authorization: 'Bearer ' + this.auth.getToken()
      }
    }).pipe(
      // ... transform ..,
      map(res => res.albums.items)
    )
  }
}
