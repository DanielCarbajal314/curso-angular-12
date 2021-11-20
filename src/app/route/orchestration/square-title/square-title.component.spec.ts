import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareTitleComponent } from './square-title.component';

describe('SquareTitleComponent', () => {
  let component: SquareTitleComponent;
  let fixture: ComponentFixture<SquareTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
