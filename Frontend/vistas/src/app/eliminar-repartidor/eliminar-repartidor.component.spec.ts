import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRepartidorComponent } from './eliminar-repartidor.component';

describe('EliminarRepartidorComponent', () => {
  let component: EliminarRepartidorComponent;
  let fixture: ComponentFixture<EliminarRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
