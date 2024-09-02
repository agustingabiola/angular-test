import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, TopBarComponent]
})
export class AppComponent {
  name = 'Mahisoft';
}
