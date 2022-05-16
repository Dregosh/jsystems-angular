import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';
import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [{
  path: '',
  component: PlaylistsComponent,
  children: [
    {
      path: '',
      component: PlaylistsViewComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
