import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { IconNames } from 'src/app/enums/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public IconNamesEnum = IconNames;

  constructor(private menuService: MenuService) {}

  openMenu = () => {
    this.menuService.toggleMenu();
  };
}
