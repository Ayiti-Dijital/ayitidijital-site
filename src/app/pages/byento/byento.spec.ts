import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Byento } from './byento';

describe('Byento', () => {
  it('shows the heading and text it gets from the route', async () => {
    await TestBed.configureTestingModule({
      imports: [Byento],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(Byento);
    fixture.componentRef.setInput('heading', 'Gramè Kreyòl');
    fixture.componentRef.setInput('text', 'Vèb Kreyòl yo pa konjige.');
    fixture.componentRef.setInput('icon', 'book');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Gramè Kreyòl');
    expect(page.textContent).toContain('Byento');
    expect(page.querySelector('[aria-current="page"]')?.textContent).toContain('Gramè Kreyòl');
  });
});
