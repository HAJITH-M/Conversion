import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarCelConversionComponent } from './far-cel-conversion.component';

describe('FarCelConversionComponent', () => {
  let component: FarCelConversionComponent;
  let fixture: ComponentFixture<FarCelConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarCelConversionComponent]
    });
    fixture = TestBed.createComponent(FarCelConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
