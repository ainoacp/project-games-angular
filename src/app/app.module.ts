
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MemorygamePageComponent } from './pages/memorygame-page/memorygame-page.component';
import { TreasurehuntPageComponent } from './pages/treasurehunt-page/treasurehunt-page.component';
import { WhoiswhoPageComponent } from './pages/whoiswho-page/whoiswho-page.component';
import { WhackamolePageComponent } from './pages/whackamole-page/whackamole-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MemorygamePageComponent,
    TreasurehuntPageComponent,
    WhoiswhoPageComponent,
    WhackamolePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
