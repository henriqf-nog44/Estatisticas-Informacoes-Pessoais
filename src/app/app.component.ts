import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = null;
  idade = null;
  pessoas = [];
  pessoaMaisJovem = null;
  pessoaMaisVelha = null;


  salvar() {
    this.pessoas.push({
      nome: this.nome,
      idade: this.idade
    });
    this.nome = null;
    this.idade = null;
    this.atualizarEstatísticas();
  }

  remover(pessoa) {
    const i = this.pessoas.indexOf(pessoa);
    this.pessoas.splice(i, 1);
    this.atualizarEstatísticas();
  }

  atualizarEstatísticas(){
    let copia = Object.create(this.pessoas);
    copia.sort((p1:any, p2:any)=> p1.idade - p2.idade);
    this.pessoaMaisJovem = copia[0];

    copia.sort((p1:any, p2:any)=> p2.idade - p1.idade);
    this.pessoaMaisVelha = copia[0];
  }
}
