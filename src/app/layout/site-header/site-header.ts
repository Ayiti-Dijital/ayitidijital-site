import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchPreview } from '../../shared/search-preview/search-preview';
import { MENU } from '../../shared/site';

@Component({
  imports: [RouterLink, RouterLinkActive, SearchPreview],
  selector: 'ad-site-header',
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly menu = MENU;
  /** The menu is a toggle on small screens and always shown from `lg` up. */
  protected readonly menuOpen = signal(false);
}
