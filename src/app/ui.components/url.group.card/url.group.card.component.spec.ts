import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlGroupCardComponent } from './url.group.card.component';

describe('UrlgroupcardComponent', () => {
  let component: UrlGroupCardComponent;
  let fixture: ComponentFixture<UrlGroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlGroupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
