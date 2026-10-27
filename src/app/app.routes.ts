import { Routes } from '@angular/router';
import { ComingSoon } from './shared/site';

const byento = () => import('./pages/byento/byento').then((m) => m.Byento);

/** A menu section without content yet: one shared page, its texts in the route data. */
function comingSoon(path: string, data: ComingSoon) {
  return { path, title: `${data.heading} – Ayiti Dijital`, data, loadComponent: byento };
}

export const routes: Routes = [
  {
    path: '',
    title: 'Ayiti Dijital – diksyonè, jwèt ak zouti pou lang Kreyòl la',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'lang-kreyol',
    title: 'Lang Kreyòl – Ayiti Dijital',
    loadComponent: () => import('./pages/lang-kreyol/lang-kreyol').then((m) => m.LangKreyol),
  },
  comingSoon('bileng', {
    heading: 'Diksyonè bileng',
    text: 'Diksyonè Kreyòl ak Fransè, Anglè, Panyòl, Alman, Pòtigè ak Italyen. Yo ap vini apre diksyonè Kreyòl–Kreyòl la.',
    icon: 'languages',
  }),
  comingSoon('flashcard', {
    heading: 'Flashcard Kreyòl',
    text: 'Aprann mo Kreyòl yo ak ti kat: sou yon bò, mo a; sou lòt bò a, sans li.',
    icon: 'cards',
  }),
  comingSoon('tradikte', {
    heading: 'Tradiktè',
    text: 'Yon zouti pou tradui tèks soti nan Kreyòl ak ale nan Kreyòl.',
    icon: 'translate',
  }),
  comingSoon('grame', {
    heading: 'Gramè Kreyòl',
    text: 'Règ gramè Kreyòl la, esplike yon fason ki senp: detèminan, mak tan ak aspè, fraz. Vèb Kreyòl yo pa konjige.',
    icon: 'book',
  }),
  comingSoon('ansiklopedi', {
    heading: 'Ansiklopedi Ayiti',
    text: 'Istwa, jewografi, kilti ak syans, ekri an Kreyòl pou tout moun.',
    icon: 'globe',
  }),
  comingSoon('kizin', {
    heading: 'Kizin Ayiti',
    text: 'Resèt kizin ayisyen an Kreyòl: diri djondjon, soup joumou, griyo ak plis ankò.',
    icon: 'pot',
  }),
  comingSoon('liv', {
    heading: 'Liv',
    text: 'Liv Ayiti Dijital an Kreyòl ap vini.',
    icon: 'books',
  }),
  {
    path: 'enfomasyon-legal',
    title: 'Enfòmasyon legal – Ayiti Dijital',
    loadComponent: () =>
      import('./pages/enfomasyon-legal/enfomasyon-legal').then((m) => m.EnfomasyonLegal),
  },
  {
    path: 'konfidansyalite',
    title: 'Konfidansyalite – Ayiti Dijital',
    loadComponent: () =>
      import('./pages/konfidansyalite/konfidansyalite').then((m) => m.Konfidansyalite),
  },
  { path: '**', redirectTo: '' },
];
