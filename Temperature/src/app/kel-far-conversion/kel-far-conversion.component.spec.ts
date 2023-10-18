import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelFarConversionComponent } from './kel-far-conversion.component';

describe('KelFarConversionComponent', () => {
  let component: KelFarConversionComponent;
  let fixture: ComponentFixture<KelFarConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KelFarConversionComponent]
    });
    fixture = TestBed.createComponent(KelFarConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
