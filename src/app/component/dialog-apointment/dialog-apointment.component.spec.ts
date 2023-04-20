import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApointmentComponent } from './dialog-apointment.component';

describe('DialogApointmentComponent', () => {
  let component: DialogApointmentComponent;
  let fixture: ComponentFixture<DialogApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogApointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
