import { Component, OnInit } from '@angular/core';
import { Photo } from './model/photo.model';
import { PhotoAlbumService } from './services/photo-album.service';

@Component({
  selector: 'app-photo-album-http',
  templateUrl: './photo-album-http.component.html',
  styleUrls: ['./photo-album-http.component.scss']
})
export class PhotoAlbumHttpComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoAlbumService: PhotoAlbumService) { }

  ngOnInit(): void {
    this.photoAlbumService.getAllPhotos().subscribe(photos => {
      this.photos = photos.slice(10,20);
    }, 
    error => console.error(error),
    () => console.log('Termine de traer las fotos!!'));

    this.photoAlbumService.getAllPhotos().subscribe({
      next: console.log,
      error: console.error,
      complete: () => console.log('Termine otra vez')
    });

  }

}
