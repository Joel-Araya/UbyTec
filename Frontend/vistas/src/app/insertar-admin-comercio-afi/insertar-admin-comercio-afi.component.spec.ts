import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarAdminComercioAfiComponent } from './insertar-admin-comercio-afi.component';

describe('InsertarAdminComercioAfiComponent', () => {
  let component: InsertarAdminComercioAfiComponent;
  let fixture: ComponentFixture<InsertarAdminComercioAfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarAdminComercioAfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarAdminComercioAfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
