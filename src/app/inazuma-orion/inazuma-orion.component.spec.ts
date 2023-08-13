import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumaOrionComponent } from './inazuma-orion.component';

describe('InazumaOrionComponent', () => {
  let component: InazumaOrionComponent;
  let fixture: ComponentFixture<InazumaOrionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumaOrionComponent]
    });
    fixture = TestBed.createComponent(InazumaOrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
