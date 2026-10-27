import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon, IconName } from '../../shared/icon/icon';
import { SectionTitle } from '../../shared/section-title/section-title';
import { DIKSYONE_URL, LEXHAITI_URL, TTS_REPO_URL, mailto } from '../../shared/site';

interface Tile {
  readonly title: string;
  readonly text: string;
  readonly icon: IconName;
  /** A link to another Ayiti Dijital site; tiles without one are "Byento". */
  readonly href?: string;
}

interface Language {
  readonly code: string;
  readonly name: string;
}

interface Dish {
  readonly category: string;
  readonly name: string;
}

/** Bilingual dictionaries: from Kreyòl to another language, or the other way. */
type Direction = 'soti' | 'ale';

/** The portal home page: one section per Ayiti Dijital tool, most of them still "Byento". */
@Component({
  imports: [RouterLink, Icon, SectionTitle],
  selector: 'ad-home',
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly dictionary: readonly Tile[] = [
    {
      title: 'Diksyonè Kreyòl–Kreyòl',
      text: 'Chak mo Kreyòl, esplike an Kreyòl.',
      icon: 'az',
      href: DIKSYONE_URL,
    },
    {
      title: 'Alfabè Kreyòl',
      text: '32 lèt ak gwoup lèt alfabè Kreyòl la.',
      icon: 'letters',
      href: `${DIKSYONE_URL}/#alfabe-seksyon`,
    },
    {
      title: 'Mo jou a',
      text: 'Yon mo Kreyòl chak jou, ak sans li ak yon egzanp.',
      icon: 'sun',
      href: `${DIKSYONE_URL}/#mo-jou-a`,
    },
  ];

  protected readonly school: readonly Tile[] = [
    {
      title: 'Diksyonè pou timoun',
      text: 'Mo senp ak egzanp pou timoun lekòl primè.',
      icon: 'school',
    },
    { title: 'Diksyonè pou lekòl', text: 'Pou elèv segondè: plis mo, plis sans.', icon: 'book' },
    { title: 'Mo teknik', text: 'Mo syans, lalwa ak enfòmatik an Kreyòl.', icon: 'scale' },
  ];

  private readonly languages: readonly Language[] = [
    { code: 'FR', name: 'Fransè' },
    { code: 'EN', name: 'Anglè' },
    { code: 'ES', name: 'Panyòl' },
    { code: 'DE', name: 'Alman' },
    { code: 'PT', name: 'Pòtigè' },
    { code: 'IT', name: 'Italyen' },
  ];

  protected readonly direction = signal<Direction>('soti');

  protected readonly pairs = computed(() =>
    this.languages.map(({ code, name }) => ({
      code,
      label: this.direction() === 'soti' ? `Kreyòl – ${name}` : `${name} – Kreyòl`,
    })),
  );

  protected readonly bookSlots = [1, 2, 3, 4, 5];

  protected readonly dishes: readonly Dish[] = [
    { category: 'Plat prensipal', name: 'Diri djondjon' },
    { category: 'Soup', name: 'Soup joumou' },
    { category: 'Vyann', name: 'Griyo' },
  ];

  protected readonly news: readonly Tile[] = [
    {
      title: 'Diksyonè Kreyòl',
      text: 'Premye paj diksyonè Kreyòl–Kreyòl la sou entènèt. Premye mo yo ap vini.',
      icon: 'az',
      href: DIKSYONE_URL,
    },
    {
      title: 'Jwèt Kreyòl',
      text: 'Kwiz, mo kwaze ak devinèt: jwe ak mo Kreyòl yo. Byento.',
      icon: 'dice',
      href: `${DIKSYONE_URL}/jwet`,
    },
    {
      title: 'Vwa Wanga Nègès',
      text: 'Yon vwa Kreyòl louvri k ap li tèks fò. N ap travay sou li.',
      icon: 'voice',
      href: TTS_REPO_URL,
    },
    {
      title: 'LexHaïti',
      text: 'Tèks legal Ayiti sou entènèt, louvri pou tout moun.',
      icon: 'scale',
      href: LEXHAITI_URL,
    },
  ];

  protected readonly helpHref = mailto('Diksyonè Kreyòl – mwen vle ede');

  /** Arrow keys move between the two tabs, as in the WAI-ARIA tabs pattern. */
  protected switchTab(): void {
    this.direction.update((d) => (d === 'soti' ? 'ale' : 'soti'));
  }
}
