import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingSidebarComponent } from './seting-sidebar.component';

describe('SetingSidebarComponent', () => {
  let component: SetingSidebarComponent;
  let fixture: ComponentFixture<SetingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetingSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
