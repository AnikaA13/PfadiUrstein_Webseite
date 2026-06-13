import { Route } from '@angular/router';
import { HomeListComponent } from './home/feature/home-list/home-list.component';
import { AktivitaetenListComponent } from './aktivitaeten/feature/aktivitaeten-list/aktivitaeten-list.component';
import { UeberUnsListComponent } from './ueber-uns/feature/ueber-uns-list/ueber-uns-list.component';
import { UeberUnsLeiterteamComponent } from './ueber-uns/feature/ueber-uns-leiterteam/ueber-uns-leiterteam.component';
import { StufenListComponent } from './ueber-uns/feature/stufen-list/stufen-list.component';
import { StufenDetailComponent } from './ueber-uns/feature/stufen-detail/stufen-detail.component';
import { DownloadsListComponent } from './downloads/feature/downloads-list/downloads-list.component';
import { ShopListComponent } from './shop/feature/shop-list/shop-list.component';
import { KontaktListComponent } from './kontakt/feature/kontakt-list/kontakt-list.component';
import { ElternkomiteListComponent } from './elternkomitee/feature/elternkomitee-list/elternkomitee-list.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeListComponent },
  { path: 'aktivitaeten', component: AktivitaetenListComponent },
  { path: 'ueber-uns', component: UeberUnsListComponent },
  { path: 'leiterteam', component: UeberUnsLeiterteamComponent },
  { path: 'stufen', component: StufenListComponent },
  { path: 'stufen/:id', component: StufenDetailComponent },
  { path: 'downloads', component: DownloadsListComponent },
  { path: 'shop', component: ShopListComponent },
  { path: 'kontakt', component: KontaktListComponent },
  { path: 'elternkomitee', component: ElternkomiteListComponent },
];
