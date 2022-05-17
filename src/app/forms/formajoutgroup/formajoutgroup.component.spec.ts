import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormajoutgroupComponent } from './formajoutgroup.component';

describe('FormajoutgroupComponent', () => {
  let component: FormajoutgroupComponent;
  let fixture: ComponentFixture<FormajoutgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormajoutgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormajoutgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
