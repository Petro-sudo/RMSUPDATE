import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtsPage } from './arts.page';

describe('ArtsPage', () => {
  let component: ArtsPage;
  let fixture: ComponentFixture<ArtsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
