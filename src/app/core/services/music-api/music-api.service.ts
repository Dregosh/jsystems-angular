import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mockAlbums } from '../../mocks/mockAlbums';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(
    @Inject(API_URL) private api_url: string,
    private http: HttpClient
  ) { }

  fetchAlbumSearchResults(query = '') {
    console.log(this.api_url);

    this.http.get(this.api_url + 'search', {
      params: {
        type: 'album', query
      }
    })

    return mockAlbums
  }
}
