import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpropertiesPage } from './viewproperties.page';

describe('ViewpropertiesPage', () => {
  let component: ViewpropertiesPage;
  let fixture: ComponentFixture<ViewpropertiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpropertiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpropertiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
