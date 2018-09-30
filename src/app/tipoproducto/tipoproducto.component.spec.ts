import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoComponent } from './tipoproducto.component';

describe('TipoproductoComponent', () => {
  let component: TipoproductoComponent;
  let fixture: ComponentFixture<TipoproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
