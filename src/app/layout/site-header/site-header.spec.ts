import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  it('has the nine menu items and a menu button for small screens', async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeader],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(SiteHeader);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const items = [...page.querySelectorAll('#meni-prensipal li')].map((li) =>
      li.textContent?.trim(),
    );
    expect(items).toEqual([
      'Lang Kreyòl',
      'Bileng',
      'Flashcard',
      'Tradiktè',
      'Gramè',
      'Ansiklopedi',
      'Kizin',
      'Jwèt',
      'Liv',
    ]);
    const button = page.querySelector<HTMLButtonElement>('button[aria-controls="meni-prensipal"]')!;
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });
});
