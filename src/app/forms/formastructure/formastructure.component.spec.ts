import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormastructureComponent } from './formastructure.component';

describe('FormastructureComponent', () => {
  let component: FormastructureComponent;
  let fixture: ComponentFixture<FormastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormastructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
