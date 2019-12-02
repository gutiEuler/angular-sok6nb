import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { TopicService } from './services/topic.service';
import { HttpHeaders, HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, BodyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TopicService]
})
export class AppModule { }
