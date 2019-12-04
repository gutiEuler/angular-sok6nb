import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { QuestionaryComponent } from './components/questionary/questionary.component';

import { BodyComponent } from './components/body/body.component';

const ROUTES: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'questionary', component: QuestionaryComponent},
  {path: '', component: BodyComponent}
];

export const APP_ROUTES: any = RouterModule.forRoot(ROUTES, { useHash: true });