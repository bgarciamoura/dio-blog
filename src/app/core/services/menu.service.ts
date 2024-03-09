import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  isMenuOpened: boolean = false;
  isMenuOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isMenuOpened$.next(this.isMenuOpened);
  }
}
