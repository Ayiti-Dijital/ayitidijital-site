import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LangKreyol } from './lang-kreyol';

describe('LangKreyol', () => {
  it('lists six tools for the Kreyòl language', async () => {
    await TestBed.configureTestingModule({
      imports: [LangKreyol],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(LangKreyol);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Lang Kreyòl');
    expect(page.querySelectorAll('ul[aria-label="Zouti pou lang Kreyòl la"] li').length).toBe(6);
  });
});
