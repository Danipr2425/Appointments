import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppoinmentFormPagePage } from './appoinment-form-page.page';

describe('AppoinmentFormPagePage', () => {
  let component: AppoinmentFormPagePage;
  let fixture: ComponentFixture<AppoinmentFormPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentFormPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
