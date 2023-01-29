import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoiswhoPageComponent } from './whoiswho-page.component';

describe('WhoiswhoPageComponent', () => {
  let component: WhoiswhoPageComponent;
  let fixture: ComponentFixture<WhoiswhoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoiswhoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoiswhoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
