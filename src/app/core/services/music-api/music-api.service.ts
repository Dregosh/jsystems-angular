import { Injectable } from '@angular/core';
import { mockAlbums } from '../../mocks/mockAlbums';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor() { }

  fetchAlbumSearchResults(query = '') {
    return mockAlbums
  }
}
