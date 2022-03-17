import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gato } from '../interfaces/gato.interface';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  private apiUrl: string = 'https://api.thecatapi.com/v1'

  constructor( private http: HttpClient ) { }

  getAllBreeds(): Observable<Gato[]> {
    const url = `${ this.apiUrl}/breeds`

    return this.http.get<Gato[]>(url);
  }
}
