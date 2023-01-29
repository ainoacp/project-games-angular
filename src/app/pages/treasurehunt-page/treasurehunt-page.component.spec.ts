import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurehuntPageComponent } from './treasurehunt-page.component';

describe('TreasurehuntPageComponent', () => {
  let component: TreasurehuntPageComponent;
  let fixture: ComponentFixture<TreasurehuntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasurehuntPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreasurehuntPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
