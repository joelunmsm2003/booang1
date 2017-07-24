import { Component } from '@angular/core';
import { IProduct,Categoria } from './product';
import { ProductService } from './productos.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
   selector: 'app-root',
     templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [ProductService]
})

export class  AppComponent  {



   iproducts: IProduct[];
   categorias: Categoria[];

   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {


      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);

      this._product.getcategorias()
      .subscribe(categorias => this.categorias = categorias);



   }
}
