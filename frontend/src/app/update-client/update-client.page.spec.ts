import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateClientPage } from './update-client.page';

describe('UpdateClientPage', () => {
  let component: UpdateClientPage;
  let fixture: ComponentFixture<UpdateClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
