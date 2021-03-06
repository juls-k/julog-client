import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JulogComponent } from './julog.component';

describe('JulogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        JulogComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JulogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'julog-client'`, () => {
    const fixture = TestBed.createComponent(JulogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('julog-client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(JulogComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('julog-client app is running!');
  });
});
