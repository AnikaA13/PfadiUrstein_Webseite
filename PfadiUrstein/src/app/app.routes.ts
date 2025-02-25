import { Routes } from '@angular/router';
import { HomeListComponent } from './home/feature/home-list/home-list.component';
import { UeberUnsListComponent } from './ueber-uns/feature/ueber-uns-list/ueber-uns-list.component';
import { AktivitaetenListComponent } from './aktivitaeten/feature/aktivitaeten-list/aktivitaeten-list.component';
import { ShopListComponent } from './shop/feature/shop-list/shop-list.component';
import { DownloadsListComponent } from './downloads/feature/downloads-list/downloads-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeListComponent,
  },
  {
    path: 'ueber-uns',
    component: UeberUnsListComponent,
  },
  {
    path: 'aktivitaeten',
    component: AktivitaetenListComponent,
  },
  {
    path: 'downloads',
    component: DownloadsListComponent,
  },
  {
    path: 'shop',
    component: ShopListComponent,
  },
];
