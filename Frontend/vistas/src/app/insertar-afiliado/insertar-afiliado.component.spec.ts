import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarAfiliadoComponent } from './insertar-afiliado.component';

describe('InsertarAfiliadoComponent', () => {
  let component: InsertarAfiliadoComponent;
  let fixture: ComponentFixture<InsertarAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
