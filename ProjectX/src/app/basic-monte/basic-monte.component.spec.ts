import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMonteComponent } from './basic-monte.component';

describe('BasicMonteComponent', () => {
  let component: BasicMonteComponent;
  let fixture: ComponentFixture<BasicMonteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMonteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMonteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
