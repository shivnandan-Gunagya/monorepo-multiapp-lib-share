import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { HeaderComponent } from '@shiv-monorepo/header';
import { ButtonComponent , SlidebarComponent } from '@shiv-monorepo/ionic-lib'; 

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent , ButtonComponent, SlidebarComponent],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent],
})
export class ExploreContainerComponentModule {}
