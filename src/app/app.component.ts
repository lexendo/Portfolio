import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeToggleComponent} from '../shared/theme-toggle/theme-toggle.component';
import {ThemeService} from '../services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
}
