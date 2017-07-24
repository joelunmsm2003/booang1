import { Injectable } from '@angular/core'; 
import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/catch'; 
import { IProduct,Categoria } from './product';  

@Injectable()
export class ProductService {
   private _producturl='http://localhost:4200/assets/productos.json';
   private _producturl_1='http://localhost:8000/categorias/';

   constructor(private _http: Http){}
   


   getproducts(): Observable<IProduct[]> { 
      return this._http.get(this._producturl) 
      .map((response: Response) => <IProduct[]> response.json()) 
      .do(data => console.log(JSON.stringify(data))) 
      .catch(this.handleError); 
   }  

   getcategorias(): Observable<Categoria[]> { 
      return this._http.get(this._producturl_1) 
      .map((response: Response) => <Categoria[]> response.json()) 
      .do(data => console.log(JSON.stringify(data))) 
      .catch(this.handleError); 
   }  
   
   private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 
}