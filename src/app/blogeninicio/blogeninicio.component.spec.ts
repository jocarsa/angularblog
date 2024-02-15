import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogeninicioComponent } from './blogeninicio.component';

describe('BlogeninicioComponent', () => {
  let component: BlogeninicioComponent;
  let fixture: ComponentFixture<BlogeninicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogeninicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogeninicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
