import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconComponent],
})
export class AtomsModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far);
  }
}
