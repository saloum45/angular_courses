import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieComponent } from './saisie.component';


describe('SaisieComponent', () => {
  let component: SaisieComponent;
  let fixture: ComponentFixture<SaisieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisieComponent]
    });
    fixture = TestBed.createComponent(SaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
