import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from 'src/app/core/services/music-search/music-search.service';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss']
})
export class RecentSearchComponent implements OnInit {
  queries: string[] = []

  constructor(
    private service: MusicSearchService
  ) { }

  ngOnInit(): void {
    this.queries = this.service.getQueries()
  }

}
