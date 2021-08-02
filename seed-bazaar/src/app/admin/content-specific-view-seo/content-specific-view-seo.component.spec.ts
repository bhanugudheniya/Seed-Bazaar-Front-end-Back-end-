import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSpecificViewSeoComponent } from './content-specific-view-seo.component';

describe('ContentSpecificViewSeoComponent', () => {
  let component: ContentSpecificViewSeoComponent;
  let fixture: ComponentFixture<ContentSpecificViewSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSpecificViewSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSpecificViewSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
