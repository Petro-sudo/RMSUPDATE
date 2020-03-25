import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagestudPage } from './managestud.page';

describe('ManagestudPage', () => {
  let component: ManagestudPage;
  let fixture: ComponentFixture<ManagestudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagestudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
