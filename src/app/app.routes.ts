import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const ROUTES: Routes = [
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTES: any = RouterModule.forRoot(ROUTES, { useHash: true });