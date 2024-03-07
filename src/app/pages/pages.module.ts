import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { MoleculesModule } from '../components/molecules/molecules.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MoleculesModule],
  exports: [HomeComponent],
})
export class PagesModule {}
