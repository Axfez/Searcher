import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { URL } from '../config/config';
import { ImageModel } from 'src/app/images-display/shared/image.model';
@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  // Method to fetch data without filter
  getImages(): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>(`${URL}&per_page=51`);
  }
  // Method to fetch data by words
  searchImages(searchTerm: string): Observable<ImageModel[]> {
    return this.http.request<ImageModel[]>(
      'GET',
      `${URL}&q=${searchTerm}&per_page=51`
    );
  }
  // Method to fetch data by category
  searchCategory(category: string): Observable<ImageModel[]> {
    return this.http.request<ImageModel[]>(
      'GET',
      `${URL}&category=${category}&per_page=51`
    );
  }
}
