import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb, Crumb } from '../../shared/breadcrumb/breadcrumb';
import { Icon, IconName } from '../../shared/icon/icon';
import { DIKSYONE_URL } from '../../shared/site';

interface Tool {
  readonly title: string;
  readonly text: string;
  readonly icon: IconName;
  readonly href?: string;
  readonly path?: string;
}

/** Everything Ayiti Dijital offers for the Kreyòl language, on one page. */
@Component({
  imports: [RouterLink, Breadcrumb, Icon],
  selector: 'ad-lang-kreyol',
  templateUrl: './lang-kreyol.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangKreyol {
  protected readonly crumbs: readonly Crumb[] = [
    { label: 'Akèy', link: '/' },
    { label: 'Lang Kreyòl' },
  ];

  protected readonly tools: readonly Tool[] = [
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
    {
      title: 'Gramè Kreyòl',
      text: 'Règ gramè yo, esplike yon fason ki senp.',
      icon: 'book',
      path: '/grame',
    },
    { title: 'Flashcard', text: 'Aprann mo yo ak ti kat.', icon: 'cards', path: '/flashcard' },
    {
      title: 'Jwèt Kreyòl',
      text: 'Kwiz, mo kwaze ak devinèt.',
      icon: 'dice',
      href: `${DIKSYONE_URL}/jwet`,
    },
  ];
}
