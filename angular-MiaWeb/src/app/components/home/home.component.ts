import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatCardModule]
})
export class HomeComponent  {

  constructor(private router: Router) {}

  onCardClickAboutMe(): void {
    console.log('Die Mat-Card wurde angeklickt! - weiterleitung zur AboutMe-Seite');
    this.router.navigate(['/aboutMe']);
  }

  onCardClickArchiv(): void {
    console.log('Die Mat-Card wurde angeklickt! - weiterleitung zur Archiv-Seite');
    this.router.navigate(['/archiv']);
  }

  onCardClickweiterleitung(name: string): void {
    console.log('Die Mat-Card wurde angeklickt! - weiterleitung zur ' + name);
    this.router.navigate([`/${name}`]);
  }

}