import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoPrincipal } from './contenido-principal';

describe('ContenidoPrincipal', () => {
  let component: ContenidoPrincipal;
  let fixture: ComponentFixture<ContenidoPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(ContenidoPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
