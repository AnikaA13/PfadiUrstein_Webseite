import { Route } from '@angular/router';
import { HomeListComponent } from './home/feature/home-list/home-list.component';
import { AktivitaetenListComponent } from './aktivitaeten/feature/aktivitaeten-list/aktivitaeten-list.component';
import { UeberUnsListComponent } from './ueber-uns/feature/ueber-uns-list/ueber-uns-list.component';
import { DownloadsListComponent } from './downloads/feature/downloads-list/downloads-list.component';
import { ShopListComponent } from './shop/feature/shop-list/shop-list.component';
import { KontaktListComponent } from './kontakt/feature/kontakt-list/kontakt-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeListComponent,
  },
  {
    path: 'aktivitaeten',
    component: AktivitaetenListComponent,
  },
  {
    path: 'ueber-uns',
    component: UeberUnsListComponent,
  },
  {
    path: 'downloads',
    component: DownloadsListComponent,
  },
  {
    path: 'shop',
    component: ShopListComponent,
  },
  {
    path: 'kontakt',
    component: KontaktListComponent,
  },
];
