import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopaccPage } from './popacc.page';

describe('PopaccPage', () => {
  let component: PopaccPage;
  let fixture: ComponentFixture<PopaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopaccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
