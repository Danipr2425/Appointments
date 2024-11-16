import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAppoinmentPage } from './update-appoinment.page';

describe('UpdateAppoinmentPage', () => {
  let component: UpdateAppoinmentPage;
  let fixture: ComponentFixture<UpdateAppoinmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppoinmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
