import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumeroAleatorioComponent } from "./numero-aleatorio/numero-aleatorio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumeroAleatorioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  numero : number = 0;

  gerar(valor : number){//valor enviado pelo componente filho através do parametro da função do componente pai
    this.numero = valor;
  }
}
