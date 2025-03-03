import { Component, Input } from '@angular/core';
import { Pensamento } from './../pensamento';
@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: "",
    conteudo: 'Eu amo Angular',
    autoria: 'Gabriel',
    modelo: 'modelo3'
  }
  larguraPensamento(): String {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
