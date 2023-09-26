import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Input } from '@angular/core';

@Component({
  selector: 'shiv-monorepo-button',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonTitle !: string;
}
