import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  worldURL=environment.worldUrl;
  constructor(private httpClient: HttpClient) { }
  httpGet(url:string):Observable<any>{
    return this.httpClient.get<any>(url);
  }
}
