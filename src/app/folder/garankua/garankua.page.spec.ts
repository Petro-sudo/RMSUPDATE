import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarankuaPage } from './garankua.page';

describe('GarankuaPage', () => {
  let component: GarankuaPage;
  let fixture: ComponentFixture<GarankuaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarankuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarankuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
