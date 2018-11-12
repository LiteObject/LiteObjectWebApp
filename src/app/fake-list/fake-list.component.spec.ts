import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeListComponent } from './fake-list.component';

describe('FakeListComponent', () => {
  let component: FakeListComponent;
  let fixture: ComponentFixture<FakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
