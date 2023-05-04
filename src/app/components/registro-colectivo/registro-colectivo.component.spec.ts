import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroColectivoComponent } from './registro-colectivo.component';

describe('RegistroColectivoComponent', () => {
  let component: RegistroColectivoComponent;
  let fixture: ComponentFixture<RegistroColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroColectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
