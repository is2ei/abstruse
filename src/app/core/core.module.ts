import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './shared/shared-functions';

import { HeaderComponent } from './header/header.component';
import { HeaderSetupComponent } from './header-setup/header-setup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderSetupComponent,
    NotFoundComponent,
    HeaderDropdownComponent
  ],
  exports: [
    HeaderComponent,
    HeaderSetupComponent
  ],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}