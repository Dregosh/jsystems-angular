import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mockAlbums } from '../../mocks/mockAlbums';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Album } from '../../model/Search';

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
    console.log(this.api_url);

    const obs = this.http.get<Album[]>(this.api_url + 'search', {
      params: {
        type: 'album', query
      },
      headers: {
        Authorization: 'Bearer ' + this.auth.getToken()
      }
    })

    return obs
  }
}
