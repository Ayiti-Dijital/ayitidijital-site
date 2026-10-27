import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  let page: HTMLElement;
  let fixture: ReturnType<typeof TestBed.createComponent<Home>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Home);
    page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('has one main title and a section per tool', () => {
    expect(page.querySelectorAll('h1').length).toBe(1);
    const sections = [...page.querySelectorAll('h2')].map((h) => h.textContent?.trim());
    expect(sections).toEqual([
      'Diksyonè Kreyòl',
      'Diksyonè pou lekòl',
      'Diksyonè bileng',
      'Ansiklopedi',
      'Liv',
      'Kizin',
      'Pwojè Ayiti Dijital',
      'Flashcard Kreyòl',
    ]);
  });

  it('switches the bilingual direction with the tabs', async () => {
    const pairs = () => [...page.querySelectorAll('#panel-bileng li')].map((li) => li.textContent);
    expect(pairs()[0]).toContain('Kreyòl – Fransè');
    page.querySelector<HTMLButtonElement>('#tab-ale')!.click();
    await fixture.whenStable();
    expect(pairs()[0]).toContain('Fransè – Kreyòl');
    expect(page.querySelector('#tab-ale')?.getAttribute('aria-selected')).toBe('true');
  });

  it('marks the school dictionaries as coming soon', () => {
    const school = page.querySelectorAll('section[aria-labelledby="lekol-tit"] li');
    expect(school.length).toBe(3);
    school.forEach((tile) => expect(tile.textContent).toContain('Byento'));
  });
});
