import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from 'src/app/core/services/menu.service';

@NgModule({
  declarations: [NavbarComponent, MenuComponent],
  imports: [CommonModule, MoleculesModule],
  exports: [NavbarComponent, MenuComponent],
  providers: [MenuService],
})
export class OrganismsModule {}
