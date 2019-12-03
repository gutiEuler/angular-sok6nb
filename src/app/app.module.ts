import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpHeaders, HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



//Components
import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';

import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';

import { BodyComponent } from './components/body/body.component';

import { AboutComponent } from './components/about/about.component';

//Services
import { TopicService } from './services/topic.service';
import { SearchService } from './services/search.service';


//Rutas
import {APP_ROUTES} from './app.routes';
import { QuestionaryComponent } from './components/questionary/questionary.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,APP_ROUTES ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, BodyComponent, AboutComponent, QuestionaryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TopicService, SearchService ]
})
export class AppModule { }
