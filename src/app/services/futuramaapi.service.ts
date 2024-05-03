import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class FuturamaapiService {
  private http = inject(HttpClient);
  private url = 'https://futuramaapi.com/api';
  constructor() { }

  getCharacters(page: number) {
    return this.http.get<Response>(`${this.url}/characters?page=${page}`);
  }
}
