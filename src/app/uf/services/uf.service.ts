import { Uf } from './../uf';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  aplicacaoApi = '/api';

  constructor(private httpClient: HttpClient) { }

  buscarUfs(): Observable<Uf[]> {

    return this.httpClient.get<Uf[]>
        (`${this.aplicacaoApi}/uf/`, );
  }

}
