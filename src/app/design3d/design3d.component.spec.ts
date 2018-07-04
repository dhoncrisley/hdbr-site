import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design3dComponent } from './design3d.component';

describe('Design3dComponent', () => {
  let component: Design3dComponent;
  let fixture: ComponentFixture<Design3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Design3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Design3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
