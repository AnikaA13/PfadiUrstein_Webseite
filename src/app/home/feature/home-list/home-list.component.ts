import { Component } from '@angular/core';
import { CarouselComponent } from '../../../shared/ui/carousel/carousel.component';

@Component({
  selector: 'app-home-list',
  imports: [CarouselComponent],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
})
export class HomeListComponent {}
