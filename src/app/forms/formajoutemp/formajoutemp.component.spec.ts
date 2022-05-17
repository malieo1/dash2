import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormajoutempComponent } from './formajoutemp.component';

describe('FormajoutempComponent', () => {
  let component: FormajoutempComponent;
  let fixture: ComponentFixture<FormajoutempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormajoutempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormajoutempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
