import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRepartidorComponent } from './editar-repartidor.component';

describe('EditarRepartidorComponent', () => {
  let component: EditarRepartidorComponent;
  let fixture: ComponentFixture<EditarRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
