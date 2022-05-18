import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MusicSearchService } from 'src/app/core/services/music-search/music-search.service';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentSearchComponent implements OnInit {
  queries: string[] = []

  constructor(
    private service: MusicSearchService,
    private cdr: ChangeDetectorRef
  ) { }

  search(query:string){
    this.service.searchAlbums(query)
  }

  ngOnInit(): void {
    this.service.queryChange.subscribe(() => {
      this.queries = this.service.getQueries()
      this.cdr.markForCheck()
    })
  }

}
