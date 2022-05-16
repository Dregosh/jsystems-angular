import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistEditorComponent } from './components/playlist-editor/playlist-editor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistsViewComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent,
    PlaylistEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
