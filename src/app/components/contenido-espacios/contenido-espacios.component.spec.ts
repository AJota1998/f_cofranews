import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEspaciosComponent } from './contenido-espacios.component';

describe('ContenidoEspaciosComponent', () => {
  let component: ContenidoEspaciosComponent;
  let fixture: ComponentFixture<ContenidoEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoEspaciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
