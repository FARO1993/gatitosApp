import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'x-api-key': 'f7991ed5-184a-4823-b3f4-10cd04b46515'
    })
    const url = `${ this.apiUrl }/breeds`

    return this.http.get<Gato[]>(url, {headers});
  }

  getCatImageById(id: string): Observable<Gato[]> {
    const headers = new HttpHeaders({
      'x-api-key': 'f7991ed5-184a-4823-b3f4-10cd04b46515'
    })
    const url = `${ this.apiUrl}/images/search?breed_id=${ id }`

    return this.http.get<Gato[]>(url, {headers:headers});
  }
}
