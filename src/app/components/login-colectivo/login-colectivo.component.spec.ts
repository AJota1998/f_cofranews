import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginColectivoComponent } from './login-colectivo.component';

describe('LoginColectivoComponent', () => {
  let component: LoginColectivoComponent;
  let fixture: ComponentFixture<LoginColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginColectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
