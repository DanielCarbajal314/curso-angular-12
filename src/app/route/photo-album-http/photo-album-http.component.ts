import { Component, OnInit } from '@angular/core';
import { PhotoAlbumService } from './services/photo-album.service';

@Component({
  selector: 'app-photo-album-http',
  templateUrl: './photo-album-http.component.html',
  styleUrls: ['./photo-album-http.component.scss']
})
export class PhotoAlbumHttpComponent implements OnInit {

  constructor(private photoAlbumService: PhotoAlbumService) { }

  ngOnInit(): void {
    this.photoAlbumService.getAllPhotos().subscribe(console.log);
  }

}
