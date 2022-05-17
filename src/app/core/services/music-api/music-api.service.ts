import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mockAlbums } from '../../mocks/mockAlbums';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  api_url = environment.api_url

  constructor() { }

  fetchAlbumSearchResults(query = '') {
    return mockAlbums
  }
}
