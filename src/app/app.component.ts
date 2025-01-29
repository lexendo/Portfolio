import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeToggleComponent} from "../shared/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
}
