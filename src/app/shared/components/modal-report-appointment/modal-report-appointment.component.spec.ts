import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReportAppointmentComponent } from './modal-report-appointment.component';

describe('ModalReportAppointmentComponent', () => {
  let component: ModalReportAppointmentComponent;
  let fixture: ComponentFixture<ModalReportAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReportAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReportAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
