import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mockAlbums } from '../../mocks/mockAlbums';
import { API_URL } from '../../tokens';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, EMPTY, from, map, NEVER, Observable, of, Subscription, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Album, AlbumSearchResponse, PagingObject } from '../../model/Search';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchAlbumSearchResults(query = '') {
    return this.http.get<unknown>('search', {
      params: {
        type: 'album', query
      },
    }).pipe(
      map(res => {
        assertAlbumSearchResponse(res)
        return res.albums.items
      }),
    )
  }
}


// https://github.com/colinhacks/zod#shape

function assertAlbumSearchResponse(res: any): asserts res is AlbumSearchResponse {
  if (!('albums' in res && 'items' in res.albums && Array.isArray(res.albums.items))) {
    throw new Error('Unexpected Server response')
  }
}
