import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallComponent } from './parall.component';

describe('ParallComponent', () => {
  let component: ParallComponent;
  let fixture: ComponentFixture<ParallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
