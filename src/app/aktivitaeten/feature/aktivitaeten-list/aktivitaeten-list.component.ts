import { Component } from '@angular/core';
import { PageCardComponent } from '../../../shared/ui/page-card/page-card.component';
import { HeaderComponent } from '../../../shared/ui/header/header.component';

@Component({
  selector: 'app-aktivitaeten-list',
  imports: [PageCardComponent, HeaderComponent],
  templateUrl: './aktivitaeten-list.component.html',
  styleUrl: './aktivitaeten-list.component.css',
})
export class AktivitaetenListComponent {}
