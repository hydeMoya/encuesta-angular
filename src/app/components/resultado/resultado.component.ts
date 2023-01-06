import { Component } from '@angular/core';
import { Encuesta } from 'src/app/model/Encuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent{

/**
 * Lista de Resultados a mostrar en pantalla
 */
public resultados: Encuesta[]=[];
page=1;
pageSize=4;
collectionSize=0;

constructor(private encuestaService: EncuestaService){}

ngOnInit(): void{
  this.consultarResultados();
}

consultarResultados(){
  console.log('entrando a oninit');
  this.encuestaService.consultarResultados().subscribe(response => {
    console.log(response);
    this.resultados = response;

    this.collectionSize = this.resultados.length;

    this.resultados = this.resultados.map((resultado,i)=>({counter: i + 1 , ...resultado}))
                                     .slice((this.page - 1) * this.pageSize, (this.page - 1)* this.pageSize + this.pageSize);
  })
}

}
