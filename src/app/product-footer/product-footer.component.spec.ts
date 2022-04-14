import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFooterComponent } from './product-footer.component';

describe('ProductFooterComponent', () => {
  let component: ProductFooterComponent;
  let fixture: ComponentFixture<ProductFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
