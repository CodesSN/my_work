import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/shared/components/gallery/modal-full-view/modal-full-view.component.spec.ts
import { ModalFullViewComponent } from './modal-full-view.component';

describe('ModalFullViewComponent', () => {
  let component: ModalFullViewComponent;
  let fixture: ComponentFixture<ModalFullViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFullViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFullViewComponent);
========
import { CalendarListComponent } from './calendar-list.component';

describe('CalendarListComponent', () => {
  let component: CalendarListComponent;
  let fixture: ComponentFixture<CalendarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarListComponent);
>>>>>>>> origin/calendar:src/app/shared/components/calendar-list/calendar-list.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
