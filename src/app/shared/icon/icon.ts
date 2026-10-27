import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'az'
  | 'sun'
  | 'book'
  | 'heart'
  | 'dice'
  | 'license'
  | 'quiz'
  | 'riddle'
  | 'grid-small'
  | 'grid-large'
  | 'letters'
  | 'people'
  | 'languages'
  | 'cards'
  | 'translate'
  | 'globe'
  | 'pot'
  | 'books'
  | 'voice'
  | 'scale'
  | 'school';

/** Small line icons drawn for this site. Decorative: hidden from screen readers. */
@Component({
  selector: 'ad-icon',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', class: 'inline-block' },
})
export class Icon {
  readonly name = input.required<IconName>();
}
