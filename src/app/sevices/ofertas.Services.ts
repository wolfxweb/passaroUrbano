import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from "../model/oferta.model"
import { URL_API } from './apiUrl';

@Injectable()
export class OfertasService {


    constructor(private http: HttpClient) { }


    public getOferta(): Observable<Oferta[]> {

        return this.http.get<Oferta[]>(`${URL_API}/ofertas`)
        
    }

    public getOfertaPorCategoria(categoria:string): Observable<Oferta[]> {

             return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
 
    }
    public getOfertaId(id: number): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`)
    }
    public  getOfertaComoUsarId(id:number){
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
    }
    public getOfertaOndeFicaId(id:number){
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
    }
}