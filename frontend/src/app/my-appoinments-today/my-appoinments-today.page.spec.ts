import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAppoinmentsTodayPage } from './my-appoinments-today.page';

describe('MyAppoinmentsTodayPage', () => {
  let component: MyAppoinmentsTodayPage;
  let fixture: ComponentFixture<MyAppoinmentsTodayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppoinmentsTodayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
