import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from '@shiv-monorepo/footer';
import { HeaderComponent } from '@shiv-monorepo/header';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FooterComponent, HeaderComponent ],
  selector: 'shiv-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'shiv2';
  
}
