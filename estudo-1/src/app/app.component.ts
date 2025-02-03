import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './componentes/parent-data/parent-data.component';
import { DirectivesComponent } from './componentes/directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'PatrickPepe';

  userData = {
    email: 'gabriel@email.com',
    role: 'Admin',
  };
  title = 'estudo-1';
}
