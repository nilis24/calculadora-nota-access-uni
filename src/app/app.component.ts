import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'calculadora-nota-acces-uni';
  nota_bat: number; // = Number((<HTMLInputElement>document.getElementById("nota_bat")).value);
  nota_sele_general: number; // = Number((<HTMLInputElement>document.getElementById("nota_sele_general")).value);
  nota_assignatura_1_pau_especifica: number;
  nota_assignatura_2_pau_especifica: number;
  coef_assignatura_1_pau_especifica: number; 
  coef_assignatura_2_pau_especifica: number;
  nota_access: number;

  constructor() {
    this.nota_bat = 0;
    this.nota_sele_general = 0;
    this.nota_assignatura_1_pau_especifica = 0;
    this.nota_assignatura_2_pau_especifica = 0;
    this.coef_assignatura_1_pau_especifica = 0;
    this.coef_assignatura_2_pau_especifica = 0;
    this.nota_access = 0;
  }

  GetCoefAssignatura1(event: any) {
    this.coef_assignatura_1_pau_especifica = event.target.value;
  }

  GetCoefAssignatura2(event: any) {
    this.coef_assignatura_2_pau_especifica = event.target.value;
  }

  Calcular(): number {
    this.nota_bat = Number((<HTMLInputElement>document.getElementById("nota_bat")).value);
    this.nota_sele_general = Number((<HTMLInputElement>document.getElementById("nota_sele_general")).value);
    this.nota_assignatura_1_pau_especifica = Number((<HTMLInputElement>document.getElementById("nota_assignatura_1_pau_especifica")).value);
    this.nota_assignatura_2_pau_especifica = Number((<HTMLInputElement>document.getElementById("nota_assignatura_2_pau_especifica")).value);
    return (this.nota_bat * 0.6) + (this.nota_sele_general * 0.4) + (this.nota_assignatura_1_pau_especifica * this.coef_assignatura_1_pau_especifica) + (this.nota_assignatura_2_pau_especifica * this.coef_assignatura_2_pau_especifica);
  }
  
  MostrarNota(): void {
    this.nota_access = this.Calcular();
    if(this.nota_access >= 0 && this.nota_access <= 14) {
      alert("La teva nota és: " + this.nota_access + " / 14")
    } else {
      alert("Ep! Comprova que totes les notes estan entre 0 i 10")
    }
    
  }
}
