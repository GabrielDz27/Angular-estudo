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
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque tincidunt congue. Curabitur molestie, eros sed interdum laoreet, enim ipsum gravida dui, non lobortis nibh quam in arcu. Suspendisse luctus turpis tortor, eu rhoncus purus ultrices nec. Aliquam sit amet semper velit. Nulla at neque urna. Etiam libero nibh, lobortis eu imperdiet a, mollis eget leo. Phasellus iaculis finibus lorem, ut mollis nulla ultricies at. Proin fringilla enim at lacinia maximus. Mauris pharetra ultrices tristique.',
      autoria: 'Gabriel',
      modelo: 'modelo3'
    }
  ];
}
