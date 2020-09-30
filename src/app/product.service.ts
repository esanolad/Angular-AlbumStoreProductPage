import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { map  } from 'rxjs/operators';
import { Album } from "./album";
import { Observable } from 'rxjs/Observable';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable()
export class ProductService {

 private _albumUrl : string = "../assets/album.json"

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
      return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }



}
