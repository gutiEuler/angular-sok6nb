import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { QuestionaryComponent } from './components/questionary/questionary.component';

const ROUTES: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'questionary', component: QuestionaryComponent}
];

export const APP_ROUTES: any = RouterModule.forRoot(ROUTES, { useHash: true });