import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelKelConversionComponent } from './cel-kel-conversion.component';

describe('CelKelConversionComponent', () => {
  let component: CelKelConversionComponent;
  let fixture: ComponentFixture<CelKelConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CelKelConversionComponent]
    });
    fixture = TestBed.createComponent(CelKelConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
