import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  standalone: true,
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: String ='Gabriel';
  age: number = 18;
  job: String = 'Programador';
  hobbies = ["Correr","Estudar","Carro"];
  car = {
    name: 'Corcel',
    year: 1977
  };
}
