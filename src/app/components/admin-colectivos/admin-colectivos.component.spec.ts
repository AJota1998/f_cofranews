import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColectivosComponent } from './admin-colectivos.component';

describe('AdminColectivosComponent', () => {
  let component: AdminColectivosComponent;
  let fixture: ComponentFixture<AdminColectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminColectivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminColectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
