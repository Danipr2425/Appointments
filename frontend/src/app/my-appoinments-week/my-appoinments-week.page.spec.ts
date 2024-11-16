import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAppoinmentsWeekPage } from './my-appoinments-week.page';

describe('MyAppoinmentsWeekPage', () => {
  let component: MyAppoinmentsWeekPage;
  let fixture: ComponentFixture<MyAppoinmentsWeekPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppoinmentsWeekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
