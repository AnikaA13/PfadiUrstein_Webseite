import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { PageCardComponent } from '../../../shared/ui/page-card/page-card.component';

@Component({
  selector: 'app-ueber-uns-list',
  imports: [HeaderComponent, PageCardComponent],
  templateUrl: './ueber-uns-list.component.html',
  styleUrl: './ueber-uns-list.component.css',
})
export class UeberUnsListComponent {}
