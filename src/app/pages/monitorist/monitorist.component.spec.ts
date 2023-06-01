import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoristComponent } from './monitorist.component';

describe('MonitoristComponent', () => {
  let component: MonitoristComponent;
  let fixture: ComponentFixture<MonitoristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
