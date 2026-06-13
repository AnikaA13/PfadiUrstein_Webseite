import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { Leiter, LeiterProfilComponent } from '../../shared/leiter-profil/leiter-profil.component';
import { LEITER_DATA } from '../../data/leiter-data';

function sortStufenleiterFirst(a: Leiter, b: Leiter): number {
  const aIsSL = a.funktion.toLowerCase().includes('stufenleiter');
  const bIsSL = b.funktion.toLowerCase().includes('stufenleiter');
  if (aIsSL && !bIsSL) return -1;
  if (!aIsSL && bIsSL) return 1;
  return 0;
}

@Component({
  selector: 'app-ueber-uns-leiterteam',
  imports: [HeaderComponent, LeiterProfilComponent],
  templateUrl: './ueber-uns-leiterteam.component.html',
  styleUrl: './ueber-uns-leiterteam.component.css',
})
export class UeberUnsLeiterteamComponent {
  personen = signal<Leiter[]>(LEITER_DATA);

  flippedCard = signal<string | null>(null);

  onCardClick(cardId: string): void {
    this.flippedCard.update(current => current === cardId ? null : cardId);
  }

  abteilungsleitung = computed(() =>
    this.personen()
      .filter(p => p.funktion.toLowerCase().includes('abteilungsleiter'))
      .sort(sortStufenleiterFirst)
  );

  stufen = computed(() => {
    const all = this.personen();
    const names = [...new Set(all.filter(p => p.stufe).map(p => p.stufe!))];
    return names.map(stufe => ({
      name: stufe,
      leiter: all.filter(p => p.stufe === stufe).sort(sortStufenleiterFirst),
    }));
  });
}
