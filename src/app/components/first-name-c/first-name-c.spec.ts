import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameC } from './first-name-c';

describe('FirstNameC', () => {
  let component: FirstNameC;
  let fixture: ComponentFixture<FirstNameC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstNameC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstNameC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
