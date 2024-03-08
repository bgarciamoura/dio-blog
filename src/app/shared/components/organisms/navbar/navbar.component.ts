import { Component } from '@angular/core';
import { IconNames } from 'src/app/enums/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public IconNamesEnum = IconNames;
}
