import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkingTimeComponent } from './form-working-time.component';

describe('FormWorkingTimeComponent', () => {
  let component: FormWorkingTimeComponent;
  let fixture: ComponentFixture<FormWorkingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWorkingTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWorkingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
