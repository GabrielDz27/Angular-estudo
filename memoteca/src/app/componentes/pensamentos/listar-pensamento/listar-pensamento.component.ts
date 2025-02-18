import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Adoro programar',
      autoria: 'componenete Pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Adoro programar',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    }
  ];
}
