import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAppoinmentsPage } from './my-appoinments.page';

describe('MyAppoinmentsPage', () => {
  let component: MyAppoinmentsPage;
  let fixture: ComponentFixture<MyAppoinmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppoinmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
