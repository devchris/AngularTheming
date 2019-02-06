import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomThemeBlockComponent } from './random-theme-block.component';

describe('RandomThemeBlockComponent', () => {
  let component: RandomThemeBlockComponent;
  let fixture: ComponentFixture<RandomThemeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomThemeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomThemeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
