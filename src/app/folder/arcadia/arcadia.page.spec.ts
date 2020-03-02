import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArcadiaPage } from './arcadia.page';

describe('ArcadiaPage', () => {
  let component: ArcadiaPage;
  let fixture: ComponentFixture<ArcadiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcadiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
