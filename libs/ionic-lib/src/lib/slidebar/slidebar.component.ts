import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'shiv-monorepo-slidebar',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss'],
})
export class SlidebarComponent {}
