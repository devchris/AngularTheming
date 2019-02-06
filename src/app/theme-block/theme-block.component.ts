import { Component, Input } from '@angular/core';
import { Theme } from '../theme.model';

@Component({
  selector: 'app-theme-block',
  templateUrl: './theme-block.component.html',
  styleUrls: ['./theme-block.component.css']
})
export class ThemeBlockComponent {

  constructor() { }

  @Input() theme: Theme;

  get primary() {
    return this.theme.primary;
  }

  get secondary() {
    return this.theme.secondary;
  }

}
