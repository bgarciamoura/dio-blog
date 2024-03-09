import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  isOpen?: Observable<boolean>;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.isOpen = this.menuService.isMenuOpened$;
  }
}
