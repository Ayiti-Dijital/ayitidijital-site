import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Breadcrumb, Crumb } from '../../shared/breadcrumb/breadcrumb';
import { CONTACT_EMAIL, mailto } from '../../shared/site';

@Component({
  imports: [Breadcrumb],
  selector: 'ad-enfomasyon-legal',
  templateUrl: './enfomasyon-legal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnfomasyonLegal {
  protected readonly crumbs: readonly Crumb[] = [
    { label: 'Akèy', link: '/' },
    { label: 'Enfòmasyon legal' },
  ];
  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly contactHref = mailto('Ayiti Dijital');

  constructor() {
    inject(Meta).updateTag({
      name: 'description',
      content: 'Enfòmasyon legal Ayiti Dijital (Impressum dapre § 5 DDG).',
    });
  }
}
