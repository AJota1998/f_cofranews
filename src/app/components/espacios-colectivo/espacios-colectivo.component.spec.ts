import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosColectivoComponent } from './espacios-colectivo.component';

describe('EspaciosColectivoComponent', () => {
  let component: EspaciosColectivoComponent;
  let fixture: ComponentFixture<EspaciosColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaciosColectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
