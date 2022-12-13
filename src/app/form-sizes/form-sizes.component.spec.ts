import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSizesComponent } from './form-sizes.component';

describe('FormSizesComponent', () => {
  let component: FormSizesComponent;
  let fixture: ComponentFixture<FormSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
