import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoProductsComponent } from './carrito-products.component';

describe('CarritoProductsComponent', () => {
  let component: CarritoProductsComponent;
  let fixture: ComponentFixture<CarritoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
