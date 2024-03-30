import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSignupPage } from './modal-signup.page';

describe('ModalSignupPage', () => {
  let component: ModalSignupPage;
  let fixture: ComponentFixture<ModalSignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
