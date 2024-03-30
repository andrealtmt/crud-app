import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalLoginPage } from './modal-login.page';

describe('ModalLoginPage', () => {
  let component: ModalLoginPage;
  let fixture: ComponentFixture<ModalLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
