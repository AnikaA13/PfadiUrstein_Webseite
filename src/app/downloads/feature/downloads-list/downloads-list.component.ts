import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { PageCardComponent } from '../../../shared/ui/page-card/page-card.component';

export interface Download {
  id: number;
  title: string;
  description: string;
  filename: string;
  date: string;
}

@Component({
  selector: 'app-downloads-list',
  imports: [HeaderComponent, PageCardComponent],
  templateUrl: './downloads-list.component.html',
  styleUrl: './downloads-list.component.css',
})
export class DownloadsListComponent {
  private sanitizer = inject(DomSanitizer);

  downloads: Download[] = [
    {
      id: 1,
      title: 'Sommerlagerprogramm 2025',
      description: 'Alle Infos zum Sommerlager 2025: Programm, Packliste und Anreise.',
      filename: 'sommerlager-2025.pdf',
      date: '15.05.2025',
    },
    {
      id: 2,
      title: 'Statuten Pfadi Urstein',
      description: 'Die offiziellen Statuten unserer Pfadiabteilung.',
      filename: 'statuten.pdf',
      date: '01.01.2024',
    },
    {
      id: 3,
      title: 'Anmeldeformular Lager',
      description: 'Formular zur Anmeldung für das nächste Lager.',
      filename: 'anmeldung-lager.pdf',
      date: '01.03.2025',
    },
    {
      id: 4,
      title: 'Jahresprogramm 2025',
      description: 'Übersicht aller geplanten Aktivitäten und Lager des Jahres 2025.',
      filename: 'jahresprogramm-2025.pdf',
      date: '10.01.2025',
    },
  ];

  previewId = signal<number | null>(null);

  togglePreview(id: number): void {
    this.previewId.update(current => current === id ? null : id);
  }

  safeUrl(filename: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`assets/downloads/${filename}`);
  }
}
