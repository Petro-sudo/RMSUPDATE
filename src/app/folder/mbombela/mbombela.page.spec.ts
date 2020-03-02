import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MbombelaPage } from './mbombela.page';

describe('MbombelaPage', () => {
  let component: MbombelaPage;
  let fixture: ComponentFixture<MbombelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbombelaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MbombelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
