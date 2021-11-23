import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../model/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumService {

  constructor(private http: HttpClient) { }

  getAllPhotos(){
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }


}
