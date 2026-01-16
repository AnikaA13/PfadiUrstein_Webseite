import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  slides = [
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: 'Mountain',
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Forest',
    },
  ];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
