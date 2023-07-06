import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDonneeComponent } from './base-donnee.component';

describe('BaseDonneeComponent', () => {
  let component: BaseDonneeComponent;
  let fixture: ComponentFixture<BaseDonneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseDonneeComponent]
    });
    fixture = TestBed.createComponent(BaseDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
