import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UrlShortenerComponent } from './url/url-shortener/url-shortener.component';

const routes: Routes = [
  {
    path: '',
    component: UrlShortenerComponent
  },
  {
    path: ':code',
    component: UrlShortenerComponent,
  },
  {
    path: 'error/page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'error/page-not-found'
  },
  // {
  //   path: '**', pathMatch: 'full',
  //   component: PageNotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
