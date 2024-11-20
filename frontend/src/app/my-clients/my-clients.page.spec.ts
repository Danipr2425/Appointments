import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyClientsPage } from './my-clients.page';

describe('MyClientsPage', () => {
  let component: MyClientsPage;
  let fixture: ComponentFixture<MyClientsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
