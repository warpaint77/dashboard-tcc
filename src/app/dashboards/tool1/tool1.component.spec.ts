import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool1Component } from './tool1.component';

describe('Tool1Component', () => {
  let component: Tool1Component;
  let fixture: ComponentFixture<Tool1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tool1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
