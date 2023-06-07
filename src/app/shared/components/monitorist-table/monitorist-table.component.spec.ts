import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoristTableComponent } from './monitorist-table.component';

describe('MonitoristTableComponent', () => {
  let component: MonitoristTableComponent;
  let fixture: ComponentFixture<MonitoristTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoristTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoristTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
