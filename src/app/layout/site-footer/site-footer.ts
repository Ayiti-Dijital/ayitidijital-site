import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CONTACT_EMAIL,
  DIKSYONE_URL,
  LEXHAITI_URL,
  REPO_URL,
  TTS_REPO_URL,
  mailto,
} from '../../shared/site';

@Component({
  imports: [RouterLink],
  selector: 'ad-site-footer',
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly contactHref = mailto('Ayiti Dijital');
  protected readonly diksyoneUrl = DIKSYONE_URL;
  protected readonly lexhaitiUrl = LEXHAITI_URL;
  protected readonly repoUrl = REPO_URL;
  protected readonly ttsRepoUrl = TTS_REPO_URL;
}
