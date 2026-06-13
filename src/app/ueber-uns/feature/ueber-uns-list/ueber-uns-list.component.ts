import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { PageCardComponent } from '../../../shared/ui/page-card/page-card.component';

@Component({
  selector: 'app-ueber-uns-list',
  imports: [HeaderComponent, PageCardComponent, RouterLink],
  templateUrl: './ueber-uns-list.component.html',
  styleUrl: './ueber-uns-list.component.css',
})
export class UeberUnsListComponent {}
