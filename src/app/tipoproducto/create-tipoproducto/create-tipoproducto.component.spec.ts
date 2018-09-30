import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoproductoComponent } from './create-tipoproducto.component';

describe('CreateTipoproductoComponent', () => {
  let component: CreateTipoproductoComponent;
  let fixture: ComponentFixture<CreateTipoproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTipoproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
