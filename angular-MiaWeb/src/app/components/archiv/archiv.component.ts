import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // <-- Wichtig für das Laden der JSON
import { MatCardModule } from '@angular/material/card'; 
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { TextComponent } from '../text/text.component'; 
import { TextInteractionService } from '../../services/textInteractionService';

@Component({
  selector: 'app-archiv',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    TextComponent, 
    HttpClientModule // <-- Ermöglicht der Komponente, HTTP-Anfragen zu senden
  ],
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.scss']
})
export class ArchivComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private breakpointObserver = inject(BreakpointObserver);
  private interactionService = inject(TextInteractionService);
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);
  
  // Hier landen die Daten aus der JSON-Datei
  menuStructure: any[] = []; 
  expandedStates: { [key: string]: boolean } = {};

  isMobile = false;
  showMobileMenu = false; 
  private breakpointSub!: Subscription;

  ngOnInit(): void {
    // Lädt die JSON-Datei aus dem Assets-Ordner
    this.http.get<any[]>('assets/menu-structure.json').subscribe({
      next: (data) => {
        this.menuStructure = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Fehler beim Laden der Menüstruktur JSON:', err);
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      this.breakpointSub = this.breakpointObserver
        .observe([Breakpoints.Handset, '(max-width: 768px)'])
        .subscribe(result => {
          this.isMobile = result.matches;
          this.cdr.detectChanges();
        });
    }
  }

  // Diese Methode entscheidet anhand der JSON-Einträge, welcher Service getriggert wird
  onMenuButtonClick(button: any): void {
    if (button.actionType === 'story') {
      this.interactionService.triggerLoadText(button.parameter);
    } else if (button.actionType === 'photo') {
      this.interactionService.loadPhotos(button.parameter);
    }
    this.showMobileMenu = false; 
  }

  toggle(key: string) {
    this.expandedStates[key] = !this.expandedStates[key];
  }

  isExpanded(key: string): boolean {
    return !!this.expandedStates[key];
  }

  ngOnDestroy(): void {
    if (this.breakpointSub) {
      this.breakpointSub.unsubscribe();
    }
  }
}