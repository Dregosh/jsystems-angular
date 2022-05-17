import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumSearchViewComponent } from './containers/album-search-view/album-search-view.component';
import { MusicComponent } from './music.component';

const routes: Routes = [
  {
    path: '', component: MusicComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: 'search', component: AlbumSearchViewComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
