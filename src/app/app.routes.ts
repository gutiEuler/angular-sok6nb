import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about.components';

const ROUTES: Routes = [
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTES: any = RouterModule.forRoot(ROUTES, { useHash: true });