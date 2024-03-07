import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [CommonModule, RouterModule, AtomsModule],
  exports: [MenuItemComponent],
})
export class MoleculesModule {}
