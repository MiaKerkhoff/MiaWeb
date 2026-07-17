import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndPrivateComponent } from './dnd-private.component';

describe('DndPrivateComponent', () => {
  let component: DndPrivateComponent;
  let fixture: ComponentFixture<DndPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DndPrivateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
