import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelCelConversionComponent } from './kel-cel-conversion.component';

describe('KelCelConversionComponent', () => {
  let component: KelCelConversionComponent;
  let fixture: ComponentFixture<KelCelConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KelCelConversionComponent]
    });
    fixture = TestBed.createComponent(KelCelConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
