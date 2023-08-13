import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumaDosComponent } from './inazuma-dos.component';

describe('InazumaDosComponent', () => {
  let component: InazumaDosComponent;
  let fixture: ComponentFixture<InazumaDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumaDosComponent]
    });
    fixture = TestBed.createComponent(InazumaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
