import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosUsuarioComponent } from './espacios-usuario.component';

describe('EspaciosUsuarioComponent', () => {
  let component: EspaciosUsuarioComponent;
  let fixture: ComponentFixture<EspaciosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaciosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
