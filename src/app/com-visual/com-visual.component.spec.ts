import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComVisualComponent } from './com-visual.component';

describe('ComVisualComponent', () => {
  let component: ComVisualComponent;
  let fixture: ComponentFixture<ComVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
