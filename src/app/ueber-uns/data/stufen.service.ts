import { Injectable } from '@angular/core';

export interface StufeActivity {
  name: string;
  description: string;
}

export interface StufeData {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  color: string;
  imageUrls: string[];
  activities: StufeActivity[];
  leiterStufe: string;
}

const STUFEN: StufeData[] = [
  {
    id: 'biber',
    name: 'Biberstufe',
    ageRange: '5–7 Jahre',
    leiterStufe: 'Biberstufe',
    color: '#8B4513',
    description:
      'Die Biberstufe ist die jüngste Stufe der Pfadi. Die kleinen Biber erleben erste Abenteuer in der Natur und lernen spielerisch den Pfadigeist kennen. Im Vordergrund stehen Neugier, Fantasie und das gemeinsame Erleben.',
    imageUrls: [
      'assets/Pictures/pfaditechnik.jpg',
      'assets/Pictures/game-cards.jpg',
      'assets/Pictures/image1.jpg',
    ],
    activities: [
      { name: 'Naturerkundung', description: 'Tiere und Pflanzen im Wald entdecken und bestimmen.' },
      { name: 'Basteln', description: 'Kreative Projekte mit Naturmaterialien wie Ästen und Steinen.' },
      { name: 'Spiele', description: 'Einfache Gruppen- und Bewegungsspiele für die Kleinsten.' },
      { name: 'Geschichten', description: 'Vorlesen und Erzählen von Pfadi-Geschichten und Abenteuern.' },
    ],
  },
  {
    id: 'woelfe',
    name: 'Wolfsstufe',
    ageRange: '7–11 Jahre',
    leiterStufe: 'Wolfsstufe',
    color: '#556B2F',
    description:
      'Die Wölfe sind das Herzstück der Pfadi. Inspiriert vom Dschungelbuch von Rudyard Kipling erleben die Kinder spannende Abenteuer, lernen Teamwork und entwickeln erste Selbstständigkeit. Das Motto lautet: \"Wir alle sind ein Rudel\".',
    imageUrls: [
      'assets/Pictures/pfaditechnik.jpg',
      'assets/Pictures/game-cards.jpg',
      'assets/Pictures/image.png',
    ],
    activities: [
      { name: 'Lagerfeuer', description: 'Feuer machen, Marshmallows rösten und Lieder singen.' },
      { name: 'Pionierprojekte', description: 'Bauen von Brücken und Türmen aus Holz und Seilen.' },
      { name: 'Schnitzeljagd', description: 'Orientierungsläufe und Schnitzeljagden im Wald.' },
      { name: 'Erste Hilfe', description: 'Erste einfache Erste-Hilfe-Massnahmen kennenlernen.' },
    ],
  },
  {
    id: 'pfader',
    name: 'Pfaderstufe',
    ageRange: '11–15 Jahre',
    leiterStufe: 'Pfaderstufe',
    color: '#4682B4',
    description:
      'Die Pfader sind die klassische Pfadi-Stufe. Hier werden echte Outdoor-Skills vermittelt: Kartenlesen, Zelt aufbauen, Kochen am Feuer. Die Jugendlichen übernehmen zunehmend Verantwortung und planen Aktivitäten mit.',
    imageUrls: [
      'assets/Pictures/pfaditechnik.jpg',
      'assets/Pictures/image1.jpg',
      'assets/Pictures/game-cards.jpg',
    ],
    activities: [
      { name: 'Kartenlesen', description: 'Topographische Karten lesen und mit Kompass navigieren.' },
      { name: 'Survival', description: 'Bivak bauen, Feuer ohne Hilfsmittel entfachen, Wasser filtern.' },
      { name: 'Klettern', description: 'Gesichertes Klettern an Felsen und in der Kletterhalle.' },
      { name: 'Lagerleben', description: 'Selbstständig Mahlzeiten zubereiten und das Lager organisieren.' },
    ],
  },
  {
    id: 'pio',
    name: 'Piostufe',
    ageRange: '15–17 Jahre',
    leiterStufe: 'Piostufe',
    color: '#8B008B',
    description:
      'Die Pios stehen kurz vor dem Schritt zum Leiter. Sie planen und leiten eigene Projekte, organisieren Hilfsaktionen und bereiten sich auf das Leiteramt vor. Selbstverantwortung und Leadership stehen im Mittelpunkt.',
    imageUrls: [
      'assets/Pictures/pfaditechnik.jpg',
      'assets/Pictures/image.png',
      'assets/Pictures/image1.jpg',
    ],
    activities: [
      { name: 'Projektwoche', description: 'Eigenständige Planung und Durchführung einer mehrtägigen Aktion.' },
      { name: 'Sozialprojekt', description: 'Freiwilligenarbeit und Hilfe in der Gemeinde.' },
      { name: 'Hochtouren', description: 'Anspruchsvolle Bergtouren und Winterlager.' },
      { name: 'Leiterkurse', description: 'Erste J+S-Kurse zur Vorbereitung auf das Leiteramt.' },
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class StufenService {
  getAll(): StufeData[] {
    return STUFEN;
  }

  getById(id: string): StufeData | undefined {
    return STUFEN.find(s => s.id === id);
  }
}
