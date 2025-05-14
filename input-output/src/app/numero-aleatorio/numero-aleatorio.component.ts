import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-numero-aleatorio',
  imports: [],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {

  //@Input -> componente filho
  @Input() numeroMax : number = 0;
  @Input() numeroMin : number = 0;

  //@Output -> evento filho
  @Output() resultado = new EventEmitter();

  sortear(){
    var valor = Math.floor(Math.random() * (this.numeroMax - this.numeroMin + 1)) + this.numeroMin; 
    this.resultado.emit(valor)
  }
}
