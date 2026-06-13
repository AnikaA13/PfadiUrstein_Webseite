import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { LeiterProfilComponent } from '../../shared/leiter-profil/leiter-profil.component';
import { StufenCarouselComponent } from '../../shared/stufen-carousel/stufen-carousel.component';
import { StufenService } from '../../data/stufen.service';
import { LEITER_DATA } from '../../data/leiter-data';

@Component({
  selector: 'app-stufen-detail',
  imports: [HeaderComponent, LeiterProfilComponent, StufenCarouselComponent],
  templateUrl: './stufen-detail.component.html',
  styleUrl: './stufen-detail.component.css',
})
export class StufenDetailComponent {
  private route = inject(ActivatedRoute);
  private stufenService = inject(StufenService);

  private stufeId = toSignal(
    this.route.paramMap.pipe(map(p => p.get('id') ?? ''))
  );

  stufe = computed(() => this.stufenService.getById(this.stufeId() ?? ''));

  leiter = computed(() =>
    LEITER_DATA.filter(l => l.stufe === this.stufe()?.leiterStufe)
  );

  flippedCard = signal<string | null>(null);

  onCardClick(cardId: string): void {
    this.flippedCard.update(c => (c === cardId ? null : cardId));
  }
}
