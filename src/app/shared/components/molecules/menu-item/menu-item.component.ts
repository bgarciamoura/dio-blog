import { Component, Input } from '@angular/core';
import { IconNames } from 'src/app/enums/icons';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() route: string = '';
  @Input() className: string = '';
  @Input() label: string = '';
  @Input() icon: IconNames = IconNames.faBars;
  @Input() onClick: Function = () => {};

  handleClick() {
    this.onClick();
  }
}
