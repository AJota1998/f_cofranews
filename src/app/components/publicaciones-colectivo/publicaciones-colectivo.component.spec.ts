import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesColectivoComponent } from './publicaciones-colectivo.component';

describe('PublicacionesColectivoComponent', () => {
  let component: PublicacionesColectivoComponent;
  let fixture: ComponentFixture<PublicacionesColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesColectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
