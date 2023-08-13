import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumagoDosComponent } from './inazumago-dos.component';

describe('InazumagoDosComponent', () => {
  let component: InazumagoDosComponent;
  let fixture: ComponentFixture<InazumagoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumagoDosComponent]
    });
    fixture = TestBed.createComponent(InazumagoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
