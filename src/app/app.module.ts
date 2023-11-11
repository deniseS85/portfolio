import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { MyPortfolioPageComponent } from './my-portfolio-page/my-portfolio-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    MyPortfolioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
