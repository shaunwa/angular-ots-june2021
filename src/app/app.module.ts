import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CongratsComponent } from './congrats/congrats.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ArticleDetailPageComponent } from './article-detail-page/article-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    CounterButtonComponent,
    CongratsComponent,
    HomePageComponent,
    AboutPageComponent,
    ArticlesPageComponent,
    NavBarComponent,
    NotFoundPageComponent,
    ArticleDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
