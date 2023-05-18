import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilColectivoComponent } from './perfil-colectivo.component';

describe('PerfilColectivoComponent', () => {
  let component: PerfilColectivoComponent;
  let fixture: ComponentFixture<PerfilColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilColectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
