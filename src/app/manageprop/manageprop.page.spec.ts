import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagepropPage } from './manageprop.page';

describe('ManagepropPage', () => {
  let component: ManagepropPage;
  let fixture: ComponentFixture<ManagepropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagepropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
