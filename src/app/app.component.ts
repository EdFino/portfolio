import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MyprojectsComponent } from "./myprojects/myprojects.component";
import { MystackComponent } from "./mystack/mystack.component";
import { ContactFormComponent } from "./contactform/contactform.component";
import { StickyNavbarComponent } from "./sticky-navbar/sticky-navbar.component";
import { MeInDetailComponent } from "./me-in-detail/me-in-detail.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    HeaderComponent,
    RouterOutlet,
    MyprojectsComponent,
    MystackComponent,
    ContactFormComponent,
    StickyNavbarComponent,
    MeInDetailComponent,
    TranslateModule
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
    constructor(private translate: TranslateService) {
      this.translate.setDefaultLang('fr');
      this.translate.use('fr');
    }
  
    switchLanguage(lang: string) {
      this.translate.use(lang);
    }
  }
