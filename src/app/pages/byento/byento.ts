import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb, Crumb } from '../../shared/breadcrumb/breadcrumb';
import { Icon, IconName } from '../../shared/icon/icon';
import { mailto } from '../../shared/site';

/** A section of the menu that has no content yet. Its texts come from the route data. */
@Component({
  imports: [RouterLink, Breadcrumb, Icon],
  selector: 'ad-byento',
  templateUrl: './byento.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Byento {
  readonly heading = input.required<string>();
  readonly text = input.required<string>();
  readonly icon = input.required<IconName>();

  protected readonly crumbs = computed<readonly Crumb[]>(() => [
    { label: 'Akèy', link: '/' },
    { label: this.heading() },
  ]);
  protected readonly helpHref = computed(() => mailto(`Ayiti Dijital – ${this.heading()}`));
}
