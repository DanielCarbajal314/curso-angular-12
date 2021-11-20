import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsquareComponent } from './ssquare.component';

describe('SsquareComponent', () => {
  let component: SsquareComponent;
  let fixture: ComponentFixture<SsquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
