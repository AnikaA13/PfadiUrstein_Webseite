import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { Leiter, LeiterProfilComponent } from '../../../ueber-uns/shared/leiter-profil/leiter-profil.component';

@Component({
  selector: 'app-elternkomitee-list',
  imports: [HeaderComponent, LeiterProfilComponent],
  templateUrl: './elternkomitee-list.component.html',
  styleUrl: './elternkomitee-list.component.css',
})
export class ElternkomiteListComponent {
  mitglieder = signal<Leiter[]>([
    {
      name: 'Christian Hartmann',
      pfadiname: 'Präsident',
      funktion: 'Präsident',
      imageUrl: 'assets/Pictures/Websitebilder/Peter-Websitebild.jpeg',
      email: 'praesident@pfadiherisau.ch',
      telefon: '+41 79 000 00 01',
      beruf: 'Kaufmann',
      seitLeiter: '2020',
      seitPfadi: '2000',
    },
    {
      name: 'Muster Vorname',
      pfadiname: 'Vizepräsident',
      funktion: 'Vizepräsident',
      imageUrl: 'assets/Pictures/Websitebilder/Chili-Websitebild.jpeg',
      email: 'vizepraesident@pfadiherisau.ch',
      telefon: '+41 79 000 00 02',
      beruf: 'Placeholder',
      seitLeiter: '2021',
      seitPfadi: '2001',
    },
    {
      name: 'Muster Vorname',
      pfadiname: 'Kassier',
      funktion: 'Kassier',
      imageUrl: 'assets/Pictures/Websitebilder/Chlapf-Websitebild.jpeg',
      email: 'kassier@pfadiherisau.ch',
      telefon: '+41 79 000 00 03',
      beruf: 'Placeholder',
      seitLeiter: '2021',
      seitPfadi: '2001',
    },
    {
      name: 'Muster Vorname',
      pfadiname: 'Aktuar',
      funktion: 'Aktuar',
      imageUrl: 'assets/Pictures/Websitebilder/Feri-Websitebild.jpeg',
      email: 'aktuar@pfadiherisau.ch',
      telefon: '+41 79 000 00 04',
      beruf: 'Placeholder',
      seitLeiter: '2022',
      seitPfadi: '2002',
    },
    {
      name: 'Muster Vorname',
      pfadiname: 'Revisor',
      funktion: 'Revisor',
      imageUrl: 'assets/Pictures/Websitebilder/Sunny-Websitebild.jpeg',
      email: 'revisor@pfadiherisau.ch',
      telefon: '+41 79 000 00 05',
      beruf: 'Placeholder',
      seitLeiter: '2022',
      seitPfadi: '2002',
    },
    {
      name: 'Muster Vorname',
      pfadiname: 'Bekleidung',
      funktion: 'Bekleidung',
      imageUrl: 'assets/Pictures/Websitebilder/Smarties-Websitebild.jpeg',
      email: 'bekleidung@pfadiherisau.ch',
      telefon: '+41 79 000 00 06',
      beruf: 'Placeholder',
      seitLeiter: '2023',
      seitPfadi: '2003',
    },
  ]);

  flippedCard = signal<string | null>(null);

  onCardClick(cardId: string): void {
    this.flippedCard.update(c => c === cardId ? null : cardId);
  }
}
