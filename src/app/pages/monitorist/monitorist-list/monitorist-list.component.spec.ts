import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoristListComponent } from './monitorist-list.component';

describe('MonitoristListComponent', () => {
  let component: MonitoristListComponent;
  let fixture: ComponentFixture<MonitoristListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoristListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoristListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
