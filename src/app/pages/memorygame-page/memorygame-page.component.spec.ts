import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorygamePageComponent } from './memorygame-page.component';

describe('MemorygamePageComponent', () => {
  let component: MemorygamePageComponent;
  let fixture: ComponentFixture<MemorygamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorygamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemorygamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
