import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mockAlbums } from '../../mocks/mockAlbums';
import { API_URL } from '../../tokens';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(
    @Inject(API_URL) private api_url: string
  ) { }

  fetchAlbumSearchResults(query = '') {
    console.log(this.api_url);

    return mockAlbums
  }
}
