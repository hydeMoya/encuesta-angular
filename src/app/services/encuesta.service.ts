import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encuesta } from '../model/Encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private baseUrl= 'http://localhost:9095/api'
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private httpClient: HttpClient) { }

  /**
   * Funcion que permite consultar encuestas
   */
  consultarResultados() : Observable<Encuesta[]>{

      return this.httpClient.get<Encuesta[]>(`${this.baseUrl}/obtener/resultados`);
  }

  guardarEncuesta(encuesta: Encuesta) : Observable<Encuesta>{
    return this.httpClient.post<Encuesta>(`${this.baseUrl}/guardar/encuesta`, encuesta, {headers: this.headers});
  }
}
