import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAdminComercioAfiComponent } from './editar-admin-comercio-afi.component';

describe('EditarAdminComercioAfiComponent', () => {
  let component: EditarAdminComercioAfiComponent;
  let fixture: ComponentFixture<EditarAdminComercioAfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAdminComercioAfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAdminComercioAfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
