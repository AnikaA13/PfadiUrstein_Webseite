import { Component } from '@angular/core';
import { CarouselComponent } from '../../../shared/ui/carousel/carousel.component';
import { PageCardComponent } from '../../../shared/ui/page-card/page-card.component';

@Component({
  selector: 'app-home-list',
  imports: [CarouselComponent, PageCardComponent],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
})
export class HomeListComponent {}
