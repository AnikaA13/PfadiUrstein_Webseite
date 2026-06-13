import { Component, input, signal, computed } from '@angular/core';

@Component({
  selector: 'app-stufen-carousel',
  imports: [],
  templateUrl: './stufen-carousel.component.html',
  styleUrl: './stufen-carousel.component.css',
})
export class StufenCarouselComponent {
  images = input.required<string[]>();

  currentIndex = signal(0);

  current = computed(() => this.images()[this.currentIndex()]);

  prev(): void {
    this.currentIndex.update(i => (i === 0 ? this.images().length - 1 : i - 1));
  }

  next(): void {
    this.currentIndex.update(i => (i === this.images().length - 1 ? 0 : i + 1));
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
