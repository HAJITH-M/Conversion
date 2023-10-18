import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarKelConversionComponent } from './far-kel-conversion.component';

describe('FarKelConversionComponent', () => {
  let component: FarKelConversionComponent;
  let fixture: ComponentFixture<FarKelConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarKelConversionComponent]
    });
    fixture = TestBed.createComponent(FarKelConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
