import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Encuesta } from 'src/app/model/Encuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public encuesta!: Encuesta;
  public valorSeleccionado!: String; 
  constructor(private http: HttpClient, private encuestaService: EncuestaService) { }

  ngOnInit(): void{
    this.encuesta = new Encuesta();
  }

  guardarEncuesta(data :any){

    this.encuesta = new Encuesta();
    this.encuesta.estiloMusical = this.valorSeleccionado;
    this.encuesta.email = data.email;
    
    this.encuestaService.guardarEncuesta(this.encuesta).subscribe(response => {
      if(response!=null){
        Swal.fire({
          position: 'top-start',
          icon: 'success',
          title: 'Encuesta guardada con exito !',
          showConfirmButton: true
        })
        
      }
    });

  }

}
