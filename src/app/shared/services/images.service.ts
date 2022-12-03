import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { URL } from '../config/config';
import { Image } from 'src/app/images-display/shared/image.model';
@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${URL}&per_page=51`);
  }
  searchImages(searchTerm: string, category: string): Observable<Image[]> {
    return this.http.request<Image[]>(
      'GET',
      `${URL}&q=${searchTerm}&category=${category}&per_page=51`
    );
  }
}
