import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationgroupComponent } from './affectationgroup.component';

describe('AffectationgroupComponent', () => {
  let component: AffectationgroupComponent;
  let fixture: ComponentFixture<AffectationgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
