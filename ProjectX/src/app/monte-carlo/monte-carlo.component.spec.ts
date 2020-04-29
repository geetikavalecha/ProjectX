import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteCarloComponent } from './monte-carlo.component';

describe('MonteCarloComponent', () => {
  let component: MonteCarloComponent;
  let fixture: ComponentFixture<MonteCarloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonteCarloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonteCarloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
