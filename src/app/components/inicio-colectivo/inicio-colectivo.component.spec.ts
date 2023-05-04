import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioColectivoComponent } from './inicio-colectivo.component';

describe('InicioColectivoComponent', () => {
  let component: InicioColectivoComponent;
  let fixture: ComponentFixture<InicioColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioColectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
