import { Component, computed, input, output } from '@angular/core';

export interface Leiter {
  name: string;
  pfadiname: string;
  funktion: string;
  stufe?: string;
  imageUrl: string;
  email?: string;
  telefon?: string;
  beruf: string;
  seitLeiter: string;
  seitPfadi: string;
}

@Component({
  selector: 'app-leiter-profil',
  imports: [],
  templateUrl: './leiter-profil.component.html',
  styleUrl: './leiter-profil.component.css',
})
export class LeiterProfilComponent {
  person = input.required<Leiter>();
  cardId = input.required<string>();
  flipped = input<boolean>(false);
  cardClick = output<string>();

  isStufenleiter = computed(() =>
    this.person().funktion.toLowerCase().includes('stufenleiter')
  );

  isAbteilungsleitung = computed(() =>
    this.person().funktion.toLowerCase().includes('abteilungsleiter')
  );
}
