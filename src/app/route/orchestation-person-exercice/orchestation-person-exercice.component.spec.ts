import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestationPersonExerciceComponent } from './orchestation-person-exercice.component';

describe('OrchestationPersonExerciceComponent', () => {
  let component: OrchestationPersonExerciceComponent;
  let fixture: ComponentFixture<OrchestationPersonExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchestationPersonExerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchestationPersonExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
