import { Component, HostBinding } from '@angular/core';
import { Theme } from './theme.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly tangoeTheme: Theme = {
    primary: '#2cd345',
    secondary: '#acff89'
  };

  readonly pinkBlueGrayTheme: Theme = {
    primary: '#ec407a',
    secondary: '#90a4ae'
  };

  readonly deepPurpleAmberTheme: Theme = {
    primary: '#7e57c2',
    secondary: '#ffca28'
  };

  theme: Theme = this.tangoeTheme;

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--primary: ${this.theme.primary};
       --secondary: ${this.theme.secondary};`
    );
  }

  constructor(private sanitizer: DomSanitizer) {}

  randomTheme(): Theme {
    const primary = this.randomHex();
    const secondary = this.randomHex();
    return { primary, secondary };
  }

  private randomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }}
