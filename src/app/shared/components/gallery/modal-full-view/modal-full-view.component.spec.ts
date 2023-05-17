import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
