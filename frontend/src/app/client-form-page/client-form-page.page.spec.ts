import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFormPagePage } from './client-form-page.page';

describe('ClientFormPagePage', () => {
  let component: ClientFormPagePage;
  let fixture: ComponentFixture<ClientFormPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
