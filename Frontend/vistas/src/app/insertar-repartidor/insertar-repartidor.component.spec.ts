import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarRepartidorComponent } from './insertar-repartidor.component';

describe('InsertarRepartidorComponent', () => {
  let component: InsertarRepartidorComponent;
  let fixture: ComponentFixture<InsertarRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarRepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
