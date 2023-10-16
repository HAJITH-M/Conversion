import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFConversionComponent } from './c-f-conversion.component';

describe('CFConversionComponent', () => {
  let component: CFConversionComponent;
  let fixture: ComponentFixture<CFConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CFConversionComponent]
    });
    fixture = TestBed.createComponent(CFConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
