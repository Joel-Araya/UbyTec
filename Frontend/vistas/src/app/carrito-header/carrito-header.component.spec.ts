import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoHeaderComponent } from './carrito-header.component';

describe('CarritoHeaderComponent', () => {
  let component: CarritoHeaderComponent;
  let fixture: ComponentFixture<CarritoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
