import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError,tap, map} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductService{
    private _httpclient: HttpClient;
    constructor( private httpclient: HttpClient) {
        this._httpclient = httpclient;
    }
    private productUrl: string = 'api/products/products.json';
    getProducts():Observable<IProduct[]>{
        return this._httpclient.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('All'+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
          .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
          );
      }
    private handleError(err: HttpErrorResponse){
        let errorMsg='';
        if(err.error instanceof ErrorEvent){
            errorMsg = `An Error occurred ${err.error.message}`;
            
        }
        else{
            errorMsg = `Server Error ${err.error.message}`
        }
        console.log(errorMsg);
        return throwError(errorMsg);
    }

    
}