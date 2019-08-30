import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress',  null) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  onChanges(newValue: number) {

    let elemHTML: any = document.getElementsByName('progreso')[0];

    console.log( this.txtProgress );

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    elemHTML.value = this.progreso;
    this.cambioValor.emit( this.progreso );
  }

  cambiarValor(val: number) {
    if (this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + val;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
