import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { map  } from 'rxjs/operators';
import { Album } from "./album";
import { Observable } from 'rxjs/Observable';
import { Product } from "./product";
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable()
export class ProductService {

  private _productsUrl : string = "../assets/products.json"

  private _albumUrl : string = "../assets/album.json"

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
      return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map((response) => <Product[]>response.json());
}



}
