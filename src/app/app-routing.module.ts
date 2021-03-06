import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/music/search",
    pathMatch: 'full'
  },
  {
    path: 'playlists',
    loadChildren: () => import('./playlists/playlists.module').then(m => m.PlaylistsModule)
  },
  { path: 'music', loadChildren: () => import('./music/music.module').then(m => m.MusicModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
