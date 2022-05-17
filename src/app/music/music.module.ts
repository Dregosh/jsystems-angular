import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { AlbumSearchViewComponent } from './containers/album-search-view/album-search-view.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultsGridComponent } from './components/results-grid/results-grid.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';


@NgModule({
  declarations: [
    MusicComponent,
    AlbumSearchViewComponent,
    SearchFormComponent,
    ResultsGridComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
