import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('First Test', () => {
  it('is true', () => expect(true).toBe(true));
});

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('is of type AppComponent', () => {
    expect(component instanceof AppComponent).toBe(true);
  });

  it('has a title', () => {
    let debug: DebugElement = fixture.debugElement.query(By.css('.navbar-brand'));
    let element: HTMLElement = debug.nativeElement;
    expect(element.textContent).toContain('Tour of Heroes');
  });
});
