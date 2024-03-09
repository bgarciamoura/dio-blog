import { Component, Input, OnInit } from '@angular/core';
import {
  IconName,
  IconPrefix,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';
import { IconNames } from 'src/app/enums/icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon: IconNames = IconNames.faBars;
  @Input() iconSize: SizeProp = 'sm';
  active?: Observable<boolean>;

  public getIcons(): [IconPrefix, IconName] {
    return ['fas', this.icon as IconName];
  }

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.active = this.menuService.isMenuOpened$;
  }
}
