import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HadminPage } from './hadmin.page';

describe('HadminPage', () => {
  let component: HadminPage;
  let fixture: ComponentFixture<HadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
