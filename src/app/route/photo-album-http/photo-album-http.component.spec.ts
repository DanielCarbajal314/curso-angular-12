import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumHttpComponent } from './photo-album-http.component';

describe('PhotoAlbumHttpComponent', () => {
  let component: PhotoAlbumHttpComponent;
  let fixture: ComponentFixture<PhotoAlbumHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAlbumHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
