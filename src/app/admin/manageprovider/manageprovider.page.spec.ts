import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageproviderPage } from './manageprovider.page';

describe('ManageproviderPage', () => {
  let component: ManageproviderPage;
  let fixture: ComponentFixture<ManageproviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageproviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageproviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
