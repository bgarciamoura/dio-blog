import { Component, Input } from '@angular/core';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconNames } from 'src/app/enums/icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon: IconNames = IconNames.faBars;

  public getIcons(): [IconPrefix, IconName] {
    return ['fas', this.icon as IconName];
  }
}
