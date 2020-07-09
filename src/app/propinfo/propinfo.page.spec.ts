import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropinfoPage } from './propinfo.page';

describe('PropinfoPage', () => {
  let component: PropinfoPage;
  let fixture: ComponentFixture<PropinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
