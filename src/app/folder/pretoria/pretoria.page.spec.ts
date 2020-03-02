import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PretoriaPage } from './pretoria.page';

describe('PretoriaPage', () => {
  let component: PretoriaPage;
  let fixture: ComponentFixture<PretoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PretoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
