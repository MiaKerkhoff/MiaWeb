import { Routes } from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { aboutMeComponent } from '../components/about-me/aboutMe.component';
import { HomeComponent } from '../components/home/home.component';
import { ArchivComponent } from '../components/archiv/archiv.component';
import { DndComponent } from '../components/dnd/dnd.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutMe',
    component: aboutMeComponent
  },
  {
    path: 'archiv',
    component: ArchivComponent
  },
  {
    path: 'dnd',
    component: DndComponent
  }
];
