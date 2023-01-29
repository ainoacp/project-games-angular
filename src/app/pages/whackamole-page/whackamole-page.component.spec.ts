import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackamolePageComponent } from './whackamole-page.component';

describe('WhackamolePageComponent', () => {
  let component: WhackamolePageComponent;
  let fixture: ComponentFixture<WhackamolePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhackamolePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhackamolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
