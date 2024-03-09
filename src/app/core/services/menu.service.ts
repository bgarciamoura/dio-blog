import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  isMenuOpened: boolean = true;
  isMenuOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isMenuOpened$.next(this.isMenuOpened);
  }
}
