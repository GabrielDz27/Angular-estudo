import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento:Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }
  criarPensamento() {
    alert("Novo pensamento criado")
  }
  cancelar() {
    alert("Ação cancelada")
  }
}
