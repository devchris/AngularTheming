import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { RandomThemeBlockComponent } from './random-theme-block/random-theme-block.component';
import { ThemeBlockComponent } from './theme-block/theme-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RandomThemeBlockComponent,
    ThemeBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
